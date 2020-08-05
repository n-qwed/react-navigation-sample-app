/**
 * Sample Screen
 * */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Content, Text, Container} from 'native-base';

class SampleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: null,
    };
  }

  _onPress() {
    const {navigation} = this.props;
    navigation.goBack();
  }

  render() {
    const {otherParam} = this.props.route.params;
    return (
      <Container>
        <Content bounces={false} style={styles.container}>
          <TouchableOpacity onPress={this._onPress.bind(this)}>
            <Text>{otherParam}</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#F5FCFF',
  },
});

export default SampleScreen;
