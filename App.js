import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {
    state = {
        bill: '20.00',
        people: '2',
        tip: '20'
    };

    render() {
        const SubmitHandler = (event) => {
            event.preventDefault();
            alert(`You're tipping $${TipAmount()} which brings the total to $${BillAmount()}. This means each person pays $${AmountToPay()}`)
        };
        let bill = (Number.parseFloat(this.state.bill, 10));
        let people = (Number.parseInt(this.state.people, 10));
        let tip = (Number.parseFloat((this.state.tip / 100), 10));

        const TipAmount = () => {
            return (Number.parseFloat((bill * tip).toFixed(2)))
        };

        const BillAmount = () => {
            return (Number.parseFloat((bill + TipAmount()).toFixed(2)))
        };

        const AmountToPay = () => {
            return (Number.parseFloat((BillAmount() / people).toFixed(2)))
        };
        return (
            <View style={styles.container}>
                <Text style={styles.textSize}>How much is the bill?</Text>
                <TextInput keyboardType="numeric"
                           onChangeText={(bill) => this.setState({bill})}
                           style={styles.textInput}
                           underlineColorAndroid={'transparent'}
                />
                <Text style={styles.textSize}>How many people are with you?</Text>
                <TextInput keyboardType="numeric"
                           onChangeText={(people) => this.setState({people})}
                           style={styles.textInput}
                           underlineColorAndroid={'transparent'}
                />
                <Text style={styles.textSize}>What percent are you tipping?</Text>
                <TextInput keyboardType="numeric"
                           onChangeText={(tip) => this.setState({tip})}
                           style={styles.textInput}
                           underlineColorAndroid={'transparent'}
                />
                <Button
                    onPress={SubmitHandler}
                    title="Calculate!"
                    color='#AEAEAE'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textSize: {
        fontSize:25,
    },
    textInput: {
        fontSize:25,
        height: 45,
        width: 100,
        backgroundColor: '#AEAEAE',
    }
});
