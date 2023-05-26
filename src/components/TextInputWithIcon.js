import React from 'react';
import { View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const TextInputWithIcon = ({ value, label, placeholder, onChangeText, iconName, ...rest }) => {
  return (
    <View style={{ marginBottom: 15, borderWidth: 2, borderRadius: 5, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Icon
        style={{ flex: 0.15, backgroundColor: 'transparent', alignSelf: 'center' }}
        name={'account'}
        // onPress={rest.onIconPress} 
        size={50}
        color="gray" />
      <TextInput
        style={{ flex: 0.85, backgroundColor: 'transparent' }}
        value={value}
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        // right={
        //   iconName && (
        //     <TextInput.Icon
        //       name={() => (
        //         // <IconButton style={{ height: 20, width: 20 }} icon={iconName} onPress={rest.onIconPress} />
        //         <Icon.Button name={iconName} onPress={rest.onIconPress} size={50}
        //           color="gray" />

        //       )}
        //     />
        //   )
        // }
        right={() => (
          <Icon
            style={{ flex: 0.2, backgroundColor: 'transparent' }}
            name={iconName} onPress={rest.onIconPress} size={50}
            color="gray" />
        )
        }
        {...rest}
      />
      <Icon
        style={{ flex: 0.15, backgroundColor: 'transparent', alignSelf: 'center' }}
        name={iconName} onPress={rest.onIconPress} size={50}
        color="gray" />
    </View>
  );
};

export default TextInputWithIcon;


