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
        boldOrange: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 14,
            color: AppColors.Orange,
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
            marginLeft: 10,
            marginRight: 10,
            marginTop: 0,
            marginBottom: 15,
            shadowColor: AppColors.Transparent,
            shadowOffset: {
              width: 1,
              height: 1
            },
            shadowRadius: 0,
            shadowOpacity: 0.08,
            borderColor: AppColors.OrangeVeryLight,
            backgroundColor: AppColors.OrangeVeryLight,
            borderRadius: 6,
            padding: 3,        
        },
        cardBody: {
            flexDirection: 'column',
            backgroundColor: AppColors.Orange,
            borderRadius: 6,
            padding: 10,
            marginVertical: 1
        },
        imageShape: {
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: AppColors.White
        }
    }),

}