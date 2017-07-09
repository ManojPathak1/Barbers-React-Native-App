import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProfessionals} from '../../Redux/actions/index';
import {getProfessionals} from '../../Redux/api/API';
import LoadingIndicator from '../home/loadingIndicator';
import IconFA from 'react-native-vector-icons/FontAwesome';

class Professionals extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: null};
    }
    componentWillMount()
    {
        this.setState({isLoading: true});
        getProfessionals()
            .then((response)=>{
                this.props.fetchProfessionals(response);
                this.setState({isLoading: false});
            });
    }
    professionalView(professional) {
        var uriImage = (professional.professionalImageUrl=="")?
                    ("https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg")
                    :(professional.professionalImageUrl);
        return (
            <TouchableHighlight
                key={professional.id}
                onPress={()=>{}}
                underlayColor="transparent"
                style={{borderBottomWidth: 0.2}}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{borderRadius: 50, borderWidth: 3, margin: 5, borderColor: '#e53458'}}>
                <Image
                    source={{uri: uriImage}}
                    style={styles.image}
                    />
                </View>
                    <View style={styles.detailBox}>
                        <Text style={styles.nameTitle}>{professional.name}</Text>
                        <Text style={styles.emailTitle}>{professional.email}</Text>
                    </View>
                    <View style={{flex: 1, marginRight: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <IconFA name="star" size={35} color="gold" />
                        <Text style={{color: 'gold'}}>4.0</Text>
                    </View>
                    </View>
                    </TouchableHighlight>
        );
    }
    getView()
    {
        if(this.state.isLoading || this.props.professionals.isFetched==null)
        {
            return <LoadingIndicator />;
        }
        else
        {
            const professionalArray = this.props.professionals.professionals;
            return (
                professionalArray.map((professional)=>{
                    return (
                        this.professionalView(professional)
                    );
                })
            );
        }
    }
    render()
    {
        return (
            <View style={{marginBottom: 2}}>
                {this.getView()}
            </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        professionals: state.professionals
    }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        fetchProfessionals: fetchProfessionals,
    }, dispatch);
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margin: 3
    },
    detailBox: {
        marginLeft: 10,
        margin: 10,
        justifyContent: 'space-around',
        flex: 6
    },
    nameTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black'
    },
    emailTitle: {
        fontSize: 15
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Professionals);
