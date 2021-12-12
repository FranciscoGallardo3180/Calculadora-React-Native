import { useState, useRef } from "react"
import { Platform, ToastAndroid } from "react-native";
enum Operadores {
    sumar, restar, multiplicar, dividir
}

const usecalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>()

    //Limpiar pantalla calculadora
    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        //no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)

                //Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                //Evaluar nro difierente 0 y no tiene punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                //evitar 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }

    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }
        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0');
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero)
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero)
        }

        setNumero('0');

    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const calcular = () => {

        const num1 = Number(numero);
        console.log('var num1 (Numero Actual): ' + num1)
        const num2 = Number(numeroAnterior);
        console.log('Variable num2(Numero Anterior): ' + num2)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                return setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                return setNumero(`${num2 - num1}`);
                break;
            case Operadores.dividir:

                if (num1 !== 0) {
                    return setNumero(`${num2 / num1}`);
                } else {
                    if (Platform.OS !== 'ios') {
                        ToastAndroid.show('No se puede dividir entre 0', ToastAndroid.LONG)
                    } else {
                        setNumero('0')
                    }

                }


                break;
            case Operadores.multiplicar:
                return setNumero(`${num1 * num2}`);
                break;
            default:

                break;
        }
        setNumero('0')
    }
    return {
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
    }
}



export default usecalculadora