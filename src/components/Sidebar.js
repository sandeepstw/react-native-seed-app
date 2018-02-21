import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	
} from 'react-native';

import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const SIZE = 40;

const footerSecContent=
{

  "Img_1":"../images/all_images/playa-escondida-3.jpeg",
  "Img_1_Link":"http://www.playa-escondida.com/",
  "Img_2":"../images/all_images/sayulita-nayarit-1.jpeg",
  "Img_2_Link":"http://www.sayulita.com/sayulita-hotels.html",
  "Img_3":"../images/all_images/sayulita-deals-1.jpeg",
  "Img_3_Link":"http://www.sayulita.com/daily-deal/",
  "Img_4":"../images/all_images/sanpancho_img.jpeg",
  "Img_1_Link":"http://www.sanpancho.com",

  "Img_5":"../images/all_images/weather_report_advert.png",
  "Img_5_Link":"http://www.sayulita.com/sayulita-weather.html",
  "Img_6":"../images/all_images/surf_report_advert.png",
  "Img_6_Link":"http://www.sayulita.com/surfing.html",
  "Img_7":"../images/all_images/playa-logo.png",
  "Img_7_Link":"http://www.playa-escondida.com/prices/special/",
  "Img_8":"../images/all_images/zachary_chambers_advert.jpg",
  "Img_8_Link":"http://www.sayulita.com/real-estate/?s=all+properties&search=search&srch_property_id=",
			 
};

const popularVacations=
{

	"Img_1":"../images/all_images/playa-escondida_image-1.png",
	"Img_1_Link":"http://www.sayulita.com/playa-escondida.html",
	"Img_2":"../images/all_images/kupuri-sm.jpg",
	"Img_2_Link":"http://www.sayulita.com/kupuri.html",
	"Img_3":"../images/all_images/refugio_small.jpg",
	"Img_3_Link":"http://www.sanpancho.com/place/refugio-de-sol/",

};

const recommendServices=
{

	"Img_1":"../images/all_images/surf_lesson_image.png",
	"Img_1_Link":"http://www.sayulita.com/surfco.html",
	"Img_2":"../images/all_images/transportation_image.png",
	"Img_2_Link":"http://www.sayulita.com/vallarta-transfer.html",
	"Img_3":"../images/all_images/loma_sayulita_mini_image.png",
	"Img_3_Link":"http://www.sanpancho.com/place/refugio-de-sol/",
	"Img_4":"../images/all_images/yoga_image.png",
	"Img_4_Link":"http://www.sayulita.com/sayulita-yoga.html",
	"Img_5":"../images/all_images/fishing_charter_image.png",
	"Img_5_Link":"http://www.sayulita.com/big-tuna.html",
	"Img_6":"../images/all_images/wedding_planner_image.png",
	"Img_6_Link":"http://www.sayulita.com/sayulita-wedding.html",

};
const Sidebar = () => {
	return (
				<View>
							<Card>
								<CardSection>
									<View style={styles.contentStyle}>
											<TouchableOpacity style={styles.button}>
													
												<Text 
												 onPress={() => Linking.openURL('http://sayulitanayarit.com/')}
												style={styles.text}
												>
												 Blog
												</Text>
														
										   </TouchableOpacity>
										   <TouchableOpacity style={styles.button}>
														
												<Text 
												onPress={() => Linking.openURL('http://www.sayulita.com/business-directory/')}
												style={styles.text}
												>
												Business

												</Text>
															
										   </TouchableOpacity>

									</View>
								</CardSection>
							</Card>

							<Card>
								<CardSection>
										<View style={styles.contentStyle}>
											<TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_1_Link)}>
												<Image style={styles.footerImgStyle} 
				                                    source={{ uri: footerSecContent.Img_1 }} 
				                                />
			                                </TouchableOpacity>
			                            </View>
								</CardSection>
							</Card>
							<Card>
								<CardSection>
										<View style={styles.contentStyle}>
											<TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_2_Link)}>
												<Image style={styles.footerImgStyle} 
				                                    source={{ uri: footerSecContent.Img_2 }} 
				                                />
				                            </TouchableOpacity>
			                            </View>
								</CardSection>
							</Card>
							<Card>
								<CardSection>
										<View style={styles.contentStyle}>
											<TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_3_Link)}>
												<Image style={styles.footerImgStyle} 
				                                    source={{ uri: footerSecContent.Img_3 }} 
				                                />
				                            </TouchableOpacity>
			                            </View>
								</CardSection>
							</Card>
							<Card>
								<CardSection>
										<View style={styles.contentStyle}>
											<TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_2_Link)}>
												<Image style={styles.footerImgStyle} 
				                                    source={{ uri: footerSecContent.Img_4 }} 
				                                />
				                            </TouchableOpacity>
			                            </View>
								</CardSection>
							</Card>

							<Card>
								<CardSection>
										<View style={{flexDirection : 'column',}}>
											<Text style={styles.middleTitleStyle} > 
			                                         2017 Events of Sayulita  
			                                </Text>
											<View style={styles.bottomImgContStyle}>
												<TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_5_Link)}>
													<Image style={styles.bottomimageStyle} 
					                                    source={{ uri: footerSecContent.Img_5 }} 
					                                />
					                           </TouchableOpacity>
				                           <TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_6_Link)}>
				                                <Image style={styles.bottomimageStyle} 
				                                    source={{ uri: footerSecContent.Img_6 }} 
				                                />
				                           </TouchableOpacity>
				                            </View>
				                            <View style={styles.bottomImgContStyle}>
					                            <TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_7_Link)}>
													<Image style={styles.bottomimageStyle} 
					                                    source={{ uri: footerSecContent.Img_7 }} 
					                                />
					                            </TouchableOpacity>
					                            <TouchableOpacity onPress={() => Linking.openURL(footerSecContent.Img_8_Link)}>
					                                <Image style={styles.bottomimageStyle} 
					                                    source={{ uri: footerSecContent.Img_8 }} 
					                                />
					                            </TouchableOpacity>  
				                            </View>
				                             <Text style={styles.middleTitleStyle} > 
			                                      Festival Feb 01 - 05, 2017
			                                 </Text>
			                            </View>
								</CardSection>
							</Card>

							<Card>
								<CardSection>
									<View style={{flexDirection : 'column'}}>
										<Text style={styles.middleTitleStyle} > 
			                              Popular Vacation Rentals 
			                            </Text>
			                            <View style={styles.popSec}>
												<View style={styles.popularContentStyle}>
														<TouchableOpacity onPress={() => Linking.openURL(popularVacations.Img_1_Link)}>
															<Image style={styles.popularImgStyle} 
							                                    source={{ uri: popularVacations.Img_1 }} 
							                                />
						                                </TouchableOpacity>
						                                <View style={styles.popularMidContentStyle}>
							                                <Text 
							                                onPress={() => Linking.openURL(popularVacations.Img_1_Link)}
							                                style={styles.popTitleStyle} > 
						                                 		 Playa Escondida 
						                                	</Text>
						                                	<Text style={styles.popContStyle} > 
						                                 		Beach-front Resort & Spah 
						                                	</Text>
					                                	</View>
					                            </View>
					                            <View style={styles.popularContentStyle}>
														<TouchableOpacity onPress={() => Linking.openURL(popularVacations.Img_2_Link)}>
															<Image style={styles.popularImgStyle} 
							                                    source={{ uri: popularVacations.Img_2 }} 
							                                />
						                                </TouchableOpacity>
						                                <View style={styles.popularMidContentStyle}>
							                                <Text 
							                                onPress={() => Linking.openURL(popularVacations.Img_2_Link)}
							                                style={styles.popTitleStyle} > 
						                                 		 Hotel Kupuri 
						                                	</Text>
						                                	<Text style={styles.popContStyle} > 
						                                 		sophisticated setting
						                                	</Text>
					                                	</View>
					                            </View>
					                            <View style={styles.popularContentStyle}>
														<TouchableOpacity onPress={() => Linking.openURL(popularVacations.Img_3_Link)}>
															<Image style={styles.popularImgStyle} 
							                                    source={{ uri: popularVacations.Img_3 }} 
							                                />
						                                </TouchableOpacity>
						                                <View style={styles.popularMidContentStyle}>
							                                <Text 
							                                onPress={() => Linking.openURL(popularVacations.Img_3_Link)}
							                                style={styles.popTitleStyle} > 
						                                 		 Casa Del Mar
						                                	</Text>
						                                	<Text style={styles.popContStyle} > 
						                                 		Hotel-Bed & Breakfast
						                                	</Text>
					                                	</View>
					                            </View>
					                    </View>
			                        </View>
								</CardSection>
							</Card>

							<Card>
								<CardSection>
										<View style={{flexDirection : 'column'}}>
											<Text style={styles.middleTitleStyle} > 
			                                   Recommended Services 
			                                </Text>
			                                <View style={styles.popSec}>
													<View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_1_Link)}>
																<Image style={styles.popularImgStyle} 
								                                    source={{ uri: recommendServices.Img_1 }} 
								                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_1_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Surf Lessons & Rentals 
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Sayulita Surf Co.
							                                	</Text>
						                                	</View>
						                            </View>
						                            <View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_2_Link)}>
																<Image style={styles.popularImgStyle} 
								                                    source={{ uri: recommendServices.Img_2 }} 
								                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_2_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Aiport Transportation 
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Vallarta Transfers
							                                	</Text>
						                                	</View>
						                            </View>
						                            <View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_3_Link)}>
																<Image style={styles.popularImgStyle} 
								                                    source={{ uri: recommendServices.Img_3 }} 
								                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_3_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Real Estate Office
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Sayulira Real Estate
							                                	</Text>
						                                	</View>
						                            </View>
						                            <View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_4_Link)}>
																<Image style={styles.popularImgStyle} 
								                                    source={{ uri: recommendServices.Img_4 }} 
								                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_4_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Yoga in Sayulita
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Paraiso Yoga
							                                	</Text>
						                                	</View>
						                            </View>
						                            <View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_5_Link)}>
																<Image style={styles.popularImgStyle} 
								                                    source={{ uri: recommendServices.Img_5 }} 
								                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_5_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Boat Charters
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Big Tuna Charters
							                                	</Text>
						                                	</View>
						                            </View>
						                            <View style={styles.popularContentStyle}>
															<TouchableOpacity onPress={() => Linking.openURL(recommendServices.Img_6_Link)}>
															<Image style={styles.popularImgStyle} 
							                                    source={{ uri: recommendServices.Img_6 }} 
							                                />
							                                </TouchableOpacity>
							                                <View style={styles.popularMidContentStyle}>
								                                <Text 
								                                onPress={() => Linking.openURL(recommendServices.Img_6_Link)}
								                                style={styles.popTitleStyle} > 
							                                 		 Wedding Planner
							                                	</Text>
							                                	<Text style={styles.popContStyle} > 
							                                 		Weddings in Sayulita
							                                	</Text>
						                                	</View>
						                            </View>
						                    </View>
				                            
			                            </View>
								</CardSection>
							</Card>

							<Card>
								<CardSection>
									<View style={styles.contentStyle}>
											<TouchableOpacity style={styles.button}>
													
												<Text 
												 onPress={() => Actions.ContactScreen()}
												style={styles.text}
												>
												Contact Us
												</Text>
														
										   </TouchableOpacity>
										 

									</View>
								</CardSection>
							</Card>
				</View>
				);
	  
}
const styles = StyleSheet.create({
	
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#863266',
		height: 36,
		borderRadius: 20,
		width:300,
		marginTop:10,
		marginBottom:10,
	},
	
	footerImgStyle:{
		width: 300,
		height: 400,
	},
	image: {
		width: 24,
		height: 24,
	},

	imageStyle: {
        height: 300,
        flex: 1,
        width: null,
       
	},
	popSec:{
		justifyContent : 'center',
		marginLeft:20,
		marginTop:20
	},
	popularImgStyle: {
        height: 80,
        width: 100,
      },
	bottomimageStyle: {
        height: 150,
        justifyContent : 'space-between',
        width: 150,
        marginLeft:15,
        alignItems:'center',
       
	},
	
    middleTitleStyle: {
		fontSize: 22,
		lineHeight: 23,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#333333',
		alignSelf: 'center',
		paddingTop: 8,
		paddingBottom: 8,
		fontFamily: 'Amatic-Bold'
    },
   
    contentStyle: {
        position: 'relative',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 25,
        zIndex: 1,
    },
    bottomImgContStyle:{
    	
		flexDirection : 'row',
		marginTop:15,
		height:150,
		marginBottom:15,
    },
    popularMidContentStyle:{
    	flexDirection : 'column',
		marginLeft:15,
		
    },
    popularContentStyle:{
    	flexDirection : 'row',

    	height:100,
		marginBottom:8,
		
    },
    popTitleStyle:{
    	fontSize: 18,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: 'hsl(283, 41%, 42%)',
		fontFamily: 'Lato-Regular'
    },
    popContStyle:{
    	fontSize: 16,
		width:150,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
    },
   
    smallAContentStyle: {
        fontSize: 14,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
    },
    smallContentStyle: {
        fontSize: 14,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#000000',
		fontFamily: 'Lato-Regular'
    },
	spacerSrtyle: {
		height: 10,
		flex: 1
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	
});

export default Sidebar;
							
							