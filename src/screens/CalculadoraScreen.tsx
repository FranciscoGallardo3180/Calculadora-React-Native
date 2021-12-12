import { Platform, Text, ToastAndroid, View } from "react-native"
import React, { useRef, useState } from "react"
import styles from "../theme/AppTheme"
import BotonCalc from "../components/BotonCalc"
import usecalculadora from "../hooks/useCalculadora"



const CalculadoraScreen = () => {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        calcular,
        btnMultiplicar,
        btnRestar,
        btnSumar
    }= usecalculadora();
    

    return (
        <View style={styles.calculadoraContainer} >
            {
                (numeroAnterior !== '0') && <Text style={styles.resultadoPequeño}>{numeroAnterior} </Text>
            }

            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >{numero} </Text>

            {/**Fila de Botones */}
            <View style={styles.fila}>
                {/**Boton */}
                <BotonCalc texto='C' color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto='+/-' color="#9B9B9B" accion={positivoNegativo} />
                <BotonCalc texto='del' color="#9B9B9B" accion={btnDelete} />
                <BotonCalc texto='/' color="#F69906" accion={btnDividir} />
            </View>

            {/**Fila de Botones */}
            <View style={styles.fila}>
                {/**Boton */}
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='x' color="#FF9F0A" accion={btnMultiplicar} />
            </View>
            {/**Fila de Botones */}
            <View style={styles.fila}>
                {/**Boton */}
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color="#FF9F0A" accion={btnRestar} />
            </View>
            {/**Fila de Botones */}
            <View style={styles.fila}>
                {/**Boton */}
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color="#FF9F0A" accion={btnSumar} />
            </View>
            {/**Fila de Botones */}
            <View style={styles.fila}>
                {/**Boton */}
                <BotonCalc texto='0' color="#313131" ancho={true} accion={armarNumero} />
                <BotonCalc texto='.' color="#313131" accion={armarNumero} />
                <BotonCalc texto='=' color="#FF9F0A" accion={calcular} />
            </View>
        </View>
    )
}

export default CalculadoraScreen