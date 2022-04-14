import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import MainScreenHeader from './subcomponents/MainScreenHeader';
import {getApi} from '../../../system/ApiRequests';
import AppLoader from '../../shared/AppLoader';
import AppColors from '../../../system/AppColors';
import AppStyles from '../../../system/AppStyles';
import { GithubUser, GithubRepositorium, IGithubRecord } from '../../../models/GithubDataModels';
import GithubResultsListView from './subcomponents/listView/GithubResultsListView';
import { GET_API_GITHUB_USERS_URL, GET_API_GITHUB_REPOS_URL, SearchSettings } from '../../../models/Constants';
import { RootState } from '../../../system/redux/reducers/Index';
import { useSelector } from 'react-redux';

function MainScreen(props: any) {
  const searchSettings = useSelector((state: RootState) => state.settings.searchSettings);

  const [searchInput, updateSearchInput] = useState<string>('');
  const [isFetching, updateFetchingState]= useState<boolean>(false);
  const [errorOccured, raiseError]= useState<boolean>(false);

  const [githubData, setGithubData] = useState<Array<IGithubRecord>>([]);

  useEffect(() => {
    initlizeData(searchSettings);
  }, [searchSettings]);

  useEffect(() => {
    initlizeData(searchSettings);
  }, []);

  function initlizeData(searchSettings: SearchSettings): void{
    updateFetchingState(true);

    fetchGithubData(searchSettings).then((fetchResults: Array<IGithubRecord>) => {
      const sortedArray = fetchResults.sort((record_a: IGithubRecord, record_b: IGithubRecord) => {
        return record_a.id === record_b.id ? 0 : record_a.id < record_b.id ? -1 : 1;
      })
      setGithubData(sortedArray);
    }).catch(()=>{
      raiseError(true)
    }).finally(()=>{
      updateFetchingState(false);
    })
  }

  async function fetchGithubData(searchSettings: SearchSettings):  Promise<Array<IGithubRecord>>{
    const final_result: Array<IGithubRecord> = new Array<IGithubRecord>();

    if(searchSettings == SearchSettings.onlyUsers || searchSettings == SearchSettings.all){
      const users: Array<GithubUser> = await getApi(GET_API_GITHUB_USERS_URL);
      const users_array = users.map(u => new GithubUser(u.id, u.login, u.avatar_url, u.html_url, u.followers_url));
      final_result.push(...users_array);
    }

    if(searchSettings == SearchSettings.onlyRepos || searchSettings == SearchSettings.all){
      const repositories: Array<GithubRepositorium> = await getApi(GET_API_GITHUB_REPOS_URL);
      const repos_array = repositories.map(r => new GithubRepositorium(r.id, r.name, r.full_name, r.description, r.owner));
  
      final_result.push(...repos_array);
    }
    return final_result;
  }

  const filteredArray = githubData?.filter(record => {
    let search_value = searchInput.toLowerCase();
    if(record instanceof GithubUser){
      let user_login =  (record as GithubUser).login?.toLowerCase();
      let user_url =  (record as GithubUser).html_url?.toLowerCase();

      return user_login?.includes(search_value) || user_url?.includes(search_value);
    }
      const repositorium = (record as GithubRepositorium);
      let repos_name = repositorium.name?.toLowerCase();
      let repos_full_name = repositorium.name?.toLowerCase();
      let repos_owner_login = repositorium.owner?.login?.toLowerCase();
      return repos_name?.includes(search_value) || repos_full_name?.includes(search_value) || repos_owner_login?.includes(search_value)
  });
  

  return (
    <>
      <View style={AppStyles.body.bodyContainer}>
        <MainScreenHeader
          searchInput={searchInput}
          updateSearchInput={updateSearchInput}
          refreshData={()=>initlizeData(searchSettings)}
        />

        {isFetching ? (
          <AppLoader
            message={'Wczytywanie danych'}
            color={AppColors.Black}
            textStyle={AppStyles.fonts.standartBlack}
          />
        ) : (
          <GithubResultsListView data={filteredArray} navigation={props.navigation} errorOccured={errorOccured}/>
        )}
      </View>
    </>
  );
}

export default MainScreen;
