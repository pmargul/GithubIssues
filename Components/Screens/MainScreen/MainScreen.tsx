import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SearchBar from './Subcomponents/SearchBar';

function MainScreen(){
    const [searchInput, updateSearchInput] = useState<string>("");

    useEffect(()=>{
        fetchGithubData(searchInput)
    },[searchInput]);

    return (
        <View>
            <SearchBar searchInput={searchInput} updateSearchInput={updateSearchInput}/>
        </View>
    )
}

const fetchGithubData=(searchInput: string)=>{
    const a = searchInput;
}

export default MainScreen;
