import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import SearchBar from './subcomponents/SearchBar';
import {getApi} from '../../../system/ApiRequests';
import AppLoader from '../../shared/AppLoader';
import AppColors from '../../../system/AppColors';
import AppStyles from '../../../system/AppStyles';
import GithubUser from '../../../models/GithubUser';
import GithubResults from './subcomponents/GithubResults';

function MainScreen() {
  const [searchInput, updateSearchInput] = useState<string>('');
  const [githubData, setGithubData] = useState<Array<GithubUser>>();
  const [filteredGithubData, setFilteredGithubData] = useState<Array<GithubUser>>();

  const [isLoading, updateIndicator] = useState<boolean>(true);

  function fetchGithubData(): void {
    const url = "https://api.github.com/users";
    getApi(url)
      .then(res => {
        setGithubData(res);
        updateIndicator(false)
      })
      .catch(() => {})
      .finally(() => {});
  }

  useEffect(() => {
    const filteredArray = githubData?.filter(user => {
        let user_login = user.login?.toLowerCase();
        let search_value = searchInput.toLowerCase();

        if(searchInput.length === 0) return true;
        return user_login?.includes(search_value);
    })
    setFilteredGithubData(filteredArray);
  }, [searchInput,githubData]);

  useEffect(() => {
    //fetchGithubData(searchInput);
  }, [githubData]);

  useEffect(() => {
    fetchGithubData();
    console.log("COMPONENT")
  }, []);
 
  return (
    <View>
      <SearchBar
        searchInput={searchInput}
        updateSearchInput={updateSearchInput}
      />

      {isLoading ? (
        <AppLoader
          message={'Wczytywanie danych'}
          color={AppColors.Black}
          textStyle={AppStyles.fonts.standartBlack}
        />
      ) : (
        <GithubResults data={filteredGithubData}/>
      )}
    </View>
  );
}

export default MainScreen;
