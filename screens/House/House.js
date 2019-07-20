import * as React from 'react';
import { StyleSheet, View, Picker} from 'react-native';
import { Layout, Text, Button, Input} from 'react-native-ui-kitten';

export default class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'js',
    };
  }

  componentDidMount() {
    // this.props.leaveHouse("test1");
    // this.props.changeHouse("test6");
    // this.props.editHouse("test1", "test1b");
    console.log(this.props);
  }

  render() {
  return (
    <View style={styles.container}>
      <Layout style={styles.header}>
        <Text style={styles.text} category='h5'> Hello</Text>
      </Layout>

      <Layout>
      <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </Layout>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    padding: 20,
    flex: 1,
  },
});