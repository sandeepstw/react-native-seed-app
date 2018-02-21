import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { View, Text, Platform, Alert,StyleSheet } from 'react-native';
import {
	Container, 
	Content, 
	CardItem, 
    Form, 
    Item,
    Input,
    Label,
    Button
} from 'native-base';
import { Card, FooterScreen } from '../common';
import DeviceInfo from 'react-native-device-info';
const SIZE = 40;
import moment from 'moment';
import {
    nameChanged, 
    lnameChanged,
    emailChanged,
    phoneChanged,
    commChanged,
  
} from '../../actions';

var Mailer = require('NativeModules').RNMail;

class ContactScreen extends Component {
	
	constructor(props) {
        super(props);
        this.state = { 
          isLoading: false,
         
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
    
    onCommChanged(text) {
		this.props.commChanged(text);  
    }
    
    
    clearForm() {
		this.setState({ isLoading: false });
		this.setState({ value: null });
	}
	handleEmail = () => {
        
        const phoneno = "[0-9]{10}";
        const pattrn = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { fname, lname, email, phone, comm } = this.props;
        
       
        
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
                Alert.alert('Please Enter Atleast 10 Digit Numbers');
                
            }else{
                    this.setState({ isLoading: true });
            		Mailer.mail({
                    		subject: `Contact Us/sayulita.com`,
                            recipients: ['mishra.alok.alok5@gmail.com'],
                           
                            body: ` <b>First Name:</b> ${fname}&nbsp;${lname}<br>
                                    <b>Email:</b> ${email}<br>
                                    <b>Phone:</b> ${phone}<br>
                                    
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
		return (
			

			<Container>
				<Content style={styles.container}>
					<Card>
							<CardItem style={styles.cardItemStyle}>
								<View style={styles.featuredTitleContainer}>
									<Text style={styles.featuredTitleStyle}>Contact Us</Text>
								</View>
							</CardItem>
							
	                       <CardItem style={styles.cardItemStyle}>
								<View style={styles.rowStyle}>
									<Text style={styles.paraStyle}>
										It has a vast list of local vocational 
										rentals and real estate properties vary from budget rooms 
										and camping under $10 to luxurious 5-star villa with ocean
										view, staff, chef and a pool. We also sale trendy fashion 
										accessories at reasonable rates. 
									</Text>
									
								</View>
						 </CardItem>
						 <CardItem style={styles.cardItemStyle}>
								<View style={styles.rowStyle}> 
									<Text style={styles.innerHeader}>Get in touch with us now!</Text>
								</View>
						</CardItem>	
						<CardItem style={styles.cardItemStyle}>
								<View style={styles.rowStyle}> 
									<Text style={styles.paraStyle}>Feel free to contact us by contact to get more information.</Text>
								</View>
						</CardItem>	
						
						 <View style={{backgroundColor:'#f7952e'}}>
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
				                    
				                    
				                   
				                    <Item style={styles.itemStyle} inlineLabel rounded>
				                        <Label>Phone*</Label>
				                        <Input 
											value={this.props.phone}
											onChangeText={this.onPhoneChenged.bind(this)}
				                        />
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
				                        <Text style={styles.buttonTextStyle} >Send Email</Text>
				                    </Button>
			                </Form>
	   					 </View>
	   					 
						
					</Card>
					
					<View style={styles.spacerSrtyle} /> 
				</Content>
				<FooterScreen />
			</Container>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2e121c',
		paddingBottom: 65
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	},
	imageStyle: {
        height: 300,
        flex: 1,
        width: null
	},
	itemTitleStyle: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 25,
		zIndex: 1,
		fontSize: 18,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	featuredTitleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
	},
	featuredTitleStyle: {
		fontSize: 28,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#333333',
		alignSelf: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Amatic-Bold'
    },
    captionStyle: {
        position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 25,
        zIndex: 1,
    },
    captionTitleStyle: {
        fontSize: 18,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	cardItemStyle: {
		padding: 5,
		borderRadius: 0,
        backgroundColor: '#f7952e',
        position: 'relative'
	},
	rowStyle: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	paraStyle: {
		lineHeight: 25,
		fontSize: 15,
		alignSelf: 'center',
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	innerHeader: {
		lineHeight: 25,
		fontSize: 25,
		alignSelf: 'center',
		color: '#333333',
		fontFamily: 'Amatic-Bold',
	},
	
	
	buttonStyle: {
		backgroundColor: '#863266',
		margin: 10
	},
	buttonTextStyle: {
		color: '#ffffff'
	},
	spacerSrtyle: {
		height: 10,
		flex: 1
	},
	itemStyle: {
        margin: 10,
        padding: 10,
    },
   
    focused: {
      color: '#863266',
    },
	map: {
		flex: 1,
		width: null,
		height: 300,
    }
});

const mapStateToProps = state => {
    return {
        
        fname: state.forminput.fname,
        lname: state.forminput.lname,
        email: state.forminput.email,
        phone: state.forminput.phone,
        comm: state.forminput.comm,
    };
};


ContactScreen = connect(mapStateToProps,{ 
    nameChanged,
    lnameChanged, 
    emailChanged,
    phoneChanged,
    commChanged,
    
})(ContactScreen);
export { ContactScreen };
