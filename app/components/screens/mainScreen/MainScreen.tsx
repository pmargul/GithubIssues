import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import MainScreenHeader from './subcomponents/MainScreenHeader';
import {getApi} from '../../../system/ApiRequests';
import AppLoader from '../../shared/AppLoader';
import AppColors from '../../../system/AppColors';
import AppStyles from '../../../system/AppStyles';
import { GithubUser, GithubRepositorium, IGithubRecord } from '../../../models/GithubDataModels';
import GithubResultsListView from './subcomponents/listView/GithubResultsListView';
import { GET_API_GITHUB_USERS_URL, GET_API_GITHUB_REPOS_URL } from '../../../models/Constants';

function MainScreen(props: any) {
  const [searchInput, updateSearchInput] = useState<string>('');
  const [isFetching, updateFetchingState]= useState<boolean>(false);
  const [errorOccured, raiseError]= useState<boolean>(false);

  const [githubData, setGithubData] = useState<Array<IGithubRecord>>([]);

  useEffect(() => {
    fetchGithubData().then((fetchResults: Array<IGithubRecord>) => {
      const sortedArray = fetchResults.sort((record_a: IGithubRecord, record_b: IGithubRecord) => {
        return record_a.id === record_b.id ? 0 : record_a.id < record_b.id ? -1 : 1;
      })
      setGithubData(sortedArray);
    }).catch(()=>{
      raiseError(true)
    }).finally(()=>{
      updateFetchingState(false);
    })

  }, []);

  async function fetchGithubData():  Promise<Array<IGithubRecord>>{
    const users: Array<GithubUser> = await getApi(GET_API_GITHUB_USERS_URL);
    const users_array = users.map(u => new GithubUser(u.id, u.login, u.avatar_url, u.html_url, u.followers_url));

    const repositories: Array<GithubRepositorium> = await getApi(GET_API_GITHUB_REPOS_URL);
    const repos_array = repositories.map(r => new GithubRepositorium(r.id, r.name, r.full_name, r.description, r.owner));

    const final_result: Array<IGithubRecord> = new Array<IGithubRecord>();
    final_result.push(...users_array);
    final_result.push(...repos_array);

    return final_result;
  }

  const filteredArray = githubData?.filter(record => {
    let search_value = searchInput.toLowerCase();
    if(record instanceof GithubUser){
      let user_login =  (record as GithubUser).login?.toLowerCase();
      return user_login?.includes(search_value);
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
