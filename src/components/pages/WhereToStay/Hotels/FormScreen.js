import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, Alert } from 'react-native';
import {
    Form, 
    Item,
    Input,
    Label,
    Picker,
    Button
} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';
import Collapsible from 'react-native-collapsible';
import Dates from 'react-native-dates';
import moment from 'moment';
import {
    nameChanged, 
    lnameChanged,
    emailChanged,
    phoneChanged,
    adultsChanged, 
    childrenChanged,
    commChanged,
    selectedHotel
} from '../../../../actions';

var Mailer = require('NativeModules').RNMail;

// here we are: define your domain model

class FormScreen extends Component {
    constructor(props) {
        super(props);
        const userLocaleCountryCode = DeviceInfo.getDeviceCountry();
        const userCountryData = getAllCountries()
          .filter((country) => country.cca2 === userLocaleCountryCode).pop();
        let callingCode = null;
        let name = null;
        let cca2 = userLocaleCountryCode;
        if (!cca2 || !userCountryData) {
          cca2 = 'US';
          callingCode = '1';
          name = 'United States';
        } else {
          callingCode = userCountryData.callingCode;
          name = userCountryData.name;
        }
        this.state = { 
          isLoading: false,
          cca2,
          callingCode,
          name,
          date: null,
          focus: 'startDate',
          startDate: null,
          endDate: null,
          modalVisible: false,
          isCollapsed: true,
        };
    }
    onNameChenged(text) {
       
		this.props.nameChanged(text);  
    }
    onLnameChanged(text) {
		this.props.lnameChanged(text);  
    }
    onEmailChanged(text) {
		this.props.emailChanged(text);  
    }
    onPhoneChenged(text) {
		this.props.phoneChanged(text);  
    }
    onAdultsChenged(text) {
		this.props.adultsChanged(text);  
    }
    onChildrenChenged(text) {
		this.props.childrenChanged(text);  
    }
    onCommChanged(text) {
		this.props.commChanged(text);  
    }
    dateFeatures() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    
    clearForm() {
		this.setState({ isLoading: false });
		this.setState({ value: null });
	}
	handleEmail = () => {
        
        const phoneno = "[0-9]{10}";
        const pattrn = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { fname, lname, adults, email, phone, children, comm } = this.props;
        const { name } = this.state;
        var cntry = name.common;
        
            if(fname==''){
                Alert.alert('Please Enter First Name');
            }else if(lname==''){
                Alert.alert('Please Enter Last Name');
            }else if(email==''){
              Alert.alert('Please Enter Email');
            }else if(pattrn.test(email)==false){
                Alert.alert('Please Enter Valid Email');
               
            }else if(phone==''){
                Alert.alert('Please Enter Phone Number');
            }else if(phone.match(phoneno)==null){
                Alert.alert('Please Enter Only Numbers');
                
            }else{
                    this.setState({ isLoading: true });
            		Mailer.mail({
                    		subject: `${this.props.library.title} /sayulita.com`,
                            recipients: [this.props.library.hotelemail],
                            ccRecipients: [this.props.library.ccemail],
                            body: ` <b>First Name:</b> ${fname}&nbsp;${lname}<br>
                                    <b>Email:</b> ${email}<br>
                                    <b>Phone:</b> ${phone}<br>
                                    <b>Adults:</b> ${adults}<br>
                                    <b>Childrens:</b> ${children}<br>
                                    <b>Check In:</b> ${this.state.startDate && this.state.startDate.format('LL')}<br>
                                    <b>Check In:</b> ${this.state.endDate && this.state.endDate.format('LL')}<br>
                                    <b>Country:</b> ${name}<br>
                                    <b>Comment:</b> ${comm}<br>`,
                    		isHTML: true,
                    		attachment: {
                    		path: '',  // The absolute path of the file from which to read data.
                    		type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
                    		name: '',   // Optional: Custom filename for attachment
                    		}
            	   }, (error, event) => {
                        		Alert.alert(
                        		error,
                        		event,
                        		[
                        			{ text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                        			{ text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
                        		],
                        		{ cancelable: true }
                        		);
                    });
                    
                this.clearForm();
        }
	}
    render() {
        const isDateBlocked = (date) => {
            date.isBefore(moment(), 'day');
        };
    
        const onDatesChange = ({ startDate, endDate, focusedInput }) => {
            this.setState({ ...this.state, focus: focusedInput }, () => 
                this.setState({ ...this.state, startDate, endDate })
            );
        };
    
        const onDateChange = ({ date }) => {
            this.setState({ ...this.state, date });
        };
        return (
            <View>
                <Form
                    ref="form"
                >
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>First Name*</Label>
                        <Input
							type="text"
							value={this.props.fname}
							onChangeText={this.onNameChenged.bind(this)}
                            
                        />
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Last Name*</Label>
                        <Input 
                            value={this.props.lname}
							onChangeText={this.onLnameChanged.bind(this)} 
                        />
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Email*</Label>
                        <Input 
                            value={this.props.email}
							onChangeText={this.onEmailChanged.bind(this)} 
                        />
                    </Item>
                    <Button 
                        style={styles.buttonStyle} 
                        rounded 
                        block
                        onPress={this.dateFeatures.bind(this)}
                    >
                        <Text style={styles.buttonTextStyle} >Get Date</Text>
                    </Button>
                    <Collapsible collapsed={this.state.isCollapsed}>
                        <Dates
                          onDatesChange={onDatesChange}
                          isDateBlocked={isDateBlocked}
                          startDate={this.state.startDate}
                          endDate={this.state.endDate}
                          focusedInput={this.state.focus}
                          range
                        />
                    </Collapsible>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
                        <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>
                            <Label>Check-In*</Label> {this.state.startDate && this.state.startDate.format('LL')}
                        </Text>
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>
                            <Label>Check-Out*</Label> {this.state.endDate && this.state.endDate.format('LL')}
                        </Text>
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Phone*</Label>
                        <Input 
							value={this.props.phone}
							onChangeText={this.onPhoneChenged.bind(this)}
                        />
                    </Item>
                    
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Adults*</Label>
                        <Picker
                            mode="dropdown"
                            style={{ width: Platform.OS === 'ios' ? undefined : 300 }}
                            selectedValue={this.props.adults}
                            onValueChange={this.onAdultsChenged.bind(this)}
                        >
                            <Item label="1" value="1" />
                            <Item label="2" value="2" />
                            <Item label="3" value="3" />
                            <Item label="4" value="4" />
                            <Item label="5" value="5" />
                            <Item label="6" value="6" />
                            <Item label="7" value="7" />
                            <Item label="8" value="8" />
                            <Item label="9" value="9" />
                            <Item label="10" value="10" />
                            <Item label="11" value="11" />
                        </Picker>
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Children</Label>
                        <Picker
                            mode="dropdown"
                            style={{ width: Platform.OS === 'ios' ? undefined : 300 }}
                            selectedValue={this.props.children}
                            onValueChange={this.onChildrenChenged.bind(this)}
                        >
                            <Item label="1" value="1" />
                            <Item label="2" value="2" />
                            <Item label="3" value="3" />
                            <Item label="4" value="4" />
                            <Item label="5" value="5" />
                            <Item label="6" value="6" />
                            <Item label="7" value="7" />
                            <Item label="8" value="8" />
                            <Item label="9" value="9" />
                            <Item label="10" value="10" />
                            <Item label="11" value="11" />
                        </Picker>
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Country*</Label>
                        <CountryPicker
                            onChange={(value) => {
                                this.setState({ 
                                    cca2: value.cca2, 
                                    callingCode: value.callingCode,
                                    name: value.name 
                                });
                            }}
                            cca2={this.state.cca2}
                            translation='eng'
                        />
                        {this.state.country &&
                            <Text style={styles.data}>
                                {JSON.stringify(
                                    this.state.country, null, 2
                                )}
                            </Text>
                        }
                    </Item>
                    <Item style={styles.itemStyle} inlineLabel rounded>
                        <Label>Comments</Label>
                        <Input 
                            value={this.props.comm}
							onChangeText={this.onCommChanged.bind(this)} 
                        />
                    </Item>
                    <Button 
                        style={styles.buttonStyle} 
                        rounded 
                        block
                        onPress={this.handleEmail.bind(this)}
                    >
                        <Text style={styles.buttonTextStyle} >Submit</Text>
                    </Button>
                </Form>
            </View>
        );
    }
}

const styles = {
    itemStyle: {
        margin: 10,
        padding: 10,
    },
    date: {
      margin: 10
    },
    focused: {
      color: '#863266',
    },
	buttonStyle: {
		backgroundColor: '#863266',
		margin: 10
	},
	buttonTextStyle: {
        color: '#ffffff',
	},
};

const mapStateToProps = state => {
    return {
        hotelemail: state.libraries.hotelemail,
        fname: state.forminput.fname,
        lname: state.forminput.lname,
        email: state.forminput.email,
        phone: state.forminput.phone,
        adults: state.forminput.adults,
        children: state.forminput.children,
        comm: state.forminput.comm,
    };
};

export default connect(mapStateToProps, { 
    nameChanged,
    lnameChanged, 
    emailChanged,
    phoneChanged,
    adultsChanged, 
    childrenChanged,
    commChanged,
    selectedHotel
})(FormScreen);
