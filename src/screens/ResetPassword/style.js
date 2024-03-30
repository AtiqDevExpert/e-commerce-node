import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    view: {
        flex: 1,
        marginHorizontal: 15
    },
    textemail:{
        color: '#08101F',
        fontSize: 14,
        marginTop: 50
    },
    forminputView: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5
    },
    userIcon: {
        marginHorizontal: 10, height: 24, width: 24, alignSelf: 'center', flex: 1
    },
    arrowicon:{
        height:24,
        width:24,
        marginTop:20
    },
    topText:{
        flex:1,
        fontSize:20,
        color:'#08101F',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:40
    },
    detailtext:{
        flex: 1,
        color:'#798293',
        fontSize:15,
        textAlign: 'center',
        marginTop:10
    }

});
export default styles