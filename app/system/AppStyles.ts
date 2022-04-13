import AppColors from "./AppColors";
import { StyleSheet } from 'react-native';

export default {
    fonts: StyleSheet.create({
        headerTitle: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 16,
            color: AppColors.White,
        },
        standartWhite: {
            fontFamily: "sans-serif",
            fontSize: 14,
            color: AppColors.White,
        },
        standartBlack: {
            fontFamily: "sans-serif",
            fontSize: 14,
            color: AppColors.Black,
        },
        standartBold: {
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            fontSize: 18,
            color: AppColors.Black,
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
            color: AppColors.Black,
        },
    }),
    header: StyleSheet.create({
        headerContainer: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: "100%",
            paddingHorizontal: 20,
            backgroundColor: AppColors.Orange
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
            padding: 2,        
        },
        cardBody: {
            flexDirection: 'column',
            //alignItems: "center",
            //justifyContent: 'center',
            backgroundColor: AppColors.Orange,
            borderColor: AppColors.Orange,
            borderWidth: 5,
            borderRadius: 12,
            padding: 5,
            marginVertical: 3
        },
        imageShape: {
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: AppColors.Black
        }
    }),

}