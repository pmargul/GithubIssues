import AppColors from "./AppColors";
import { StyleSheet } from 'react-native';

export default {
    fonts: StyleSheet.create({
        standartWhite: {
            fontFamily: "sans-serif",
            fontSize: 14,
            color: AppColors.White,
        },
        standartBlack: {
            fontFamily: "sans-serif",
            fontSize: 14,
            color: AppColors.White,
        },
        labelWhite: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 12,
            color: AppColors.White,
        },
        labelBlack: {
            fontFamily: "sans-serif",
            fontSize: 12,
            color: AppColors.White,
        },
    }),
    body: StyleSheet.create({
        bodyContainer: {
            width: "100%",
            alignItems: "center"
        },
        cardContainer: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 0,
            marginBottom: 15,
            shadowColor: AppColors.Transparent,
            shadowOffset: {
              width: 1,
              height: 1
            },
            shadowRadius: 20,
            shadowOpacity: 0.08,
            borderWidth: 5,
            borderColor: AppColors.OrangeLight,
            backgroundColor: AppColors.OrangeLight,
            borderRadius: 12,
            padding: 2         
        },
        cardBody: {
            flexDirection: 'column',
            //alignItems: "center",
            //justifyContent: 'center',
            backgroundColor: AppColors.Orange,
            borderColor: AppColors.Orange,
            borderWidth: 5,
            borderRadius: 12,
            flex: 1,
            padding: 5,
            marginVertical: 3
        },
    }),

}