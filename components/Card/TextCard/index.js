import { Image, Text, TouchableOpacity } from 'react-native';
import { Card, CardButtons, CardImage, CardLeft, CardRight, CardText, CardTitle } from './style';

export default function TextCard({ children, title, logo, variant, commentCount, sharePoints = 0}) {
    return (
        <Card testID='text-card'>
            <CardLeft>
                <CardImage source={logo} />
            </CardLeft>
            <CardRight>
                <CardTitle>{title}</CardTitle>
                <CardText>
                    {children}
                </CardText>

                <CardButtons>
                    <TouchableOpacity testID='icon' >
                        {
                            variant === 'liked' ?
                                (<Image testID='heart-full-icon' source={require('../../../assets/heart-full-icon.png')} />)
                                :
                                (<Image testID='heart-icon' source={require('../../../assets/heart-icon.png')} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={

                        {
                            flexDirection: 'row',
                        }

                    }>
                        <Image source={require('../../../assets/comment-icon.png')} />
                        <Text testID='comment-count'
                            style={
                                {
                                    position: 'relative',
                                    color: '#ff5757',
                                    fontWeight: 'bold',
                                    top: -5,
                                }
                            }
                        > {commentCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            {
                                flexDirection: 'row',
                            }
                        }
                    >
                        <Image source={require('../../../assets/share-icon.png')} />
                        <Text testID='share-points'
                            style={
                                {
                                    position: 'relative',
                                    color: '#ff5757',
                                    fontWeight: 'bold',
                                    top: -5,
                                }
                            }
                        > +{sharePoints}</Text>
                    </TouchableOpacity>
                </CardButtons>
            </CardRight>
        </Card>
    );
} 