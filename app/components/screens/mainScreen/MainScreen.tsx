import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import SearchBar from './subcomponents/SearchBar';
import {getApi} from '../../../system/ApiRequests';
import AppLoader from '../../shared/AppLoader';
import AppColors from '../../../system/AppColors';
import AppStyles from '../../../system/AppStyles';
import { GithubUser, GithubRepositorium, IGithubRecord } from '../../../models/GithubDataModels';
import GithubResults from './subcomponents/GithubResults';

function MainScreen() {
  const [searchInput, updateSearchInput] = useState<string>('');
  const [isFetching, updateFetchingState]= useState<boolean>(true);
  const [githubData, setGithubData] = useState<Array<IGithubRecord>>([]);

  useEffect(() => {
    fetchGithubData().then((fetchResults: Array<IGithubRecord>) => {
      const sortedArray = fetchResults.sort((record_a: IGithubRecord, record_b: IGithubRecord) => {
        return record_a.id === record_b.id ? 0 : record_a.id < record_b.id ? -1 : 1;
      })
      setGithubData(sortedArray);
    }).catch(()=>{
      // Raise an error
    }).finally(()=>{
      updateFetchingState(false);
    })
  }, []);

  async function fetchGithubData():  Promise<Array<IGithubRecord>>{
    const get_users_url = "https://api.github.com/users";
    const get_repos_url = "https://api.github.com/repositories";

    const users: Array<GithubUser> = await getApi(get_users_url);
    const users_array = users.map(u => new GithubUser(u.id, u.login, u.avatar_url, u.repos_url));
    //setGithubData(githubData.concat(users_array));

    const repositories: Array<GithubRepositorium> = await getApi(get_repos_url);
    const repos_array = repositories.map(r => new GithubRepositorium(r.id, r.name, r.full_name, r.description, r.owner));
    //setGithubData(githubData.concat(repos_array));

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
    <View>
      <SearchBar
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
        <GithubResults data={filteredArray}/>
      )}
    </View>
  );
}

export default MainScreen;
