import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
    },
    resultado:{
        color:'white' ,
        fontSize:60,
        textAlign:'right',
        marginBottom: 10
       
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal: 20,
        justifyContent:'flex-end'
        
    },
    resultadoPequeño :{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom: 18,
        paddingHorizontal:10,

    },
    boton:{
        height: 80,
        width:80,
        backgroundColor: '#A0A0A0',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    botonTexto:{
        textAlign:'center',
        padding: 10,
        fontSize: 30,
        color:'white',
        fontWeight:'400'

    },
    
});

export default styles

