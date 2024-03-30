import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
const FormInput = (data) => {
    let { error, rightIconName, containerStyle, onPressIcon, forgetPassword, forget, textInputContainerStyle, title, predefineContainer, predefineTextStyle, RightIconFamily, iconColorRight, selectable, leftChild } = data
    return (
        <View style={containerStyle} >
            <View style={predefineContainer}>
                {title &&
                    <Text style={styles.predifineText}>{title}</Text>
                }
                <View style={textInputContainerStyle}>
                    {leftChild &&
                        leftChild
                    }
                    {selectable ?
                        <Text {...data}>{data.value ? data.value : data.placeholder}</Text>
                        :
                        <TextInput
                            {...data}
                        />
                    }

                    {rightIconName &&
                        <RightIconFamily style={{ textAlignVertical: 'center', paddingRight: 20 }} color={iconColorRight} onPress={onPressIcon} size={20} name={rightIconName} />
                    }
                </View>
            </View>
            {error && <Text style={styles.errorText} >{error}</Text>
            }
            {forget &&
                <TouchableOpacity style={{ marginTop: 5, alignSelf: 'flex-end', marginBottom: 15 }} onPress={forgetPassword}>
                    <Text style={{ color: '#000' }}>Forget password?</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    predifineText: {
        color: '#08101F',
        fontSize: 14,
        marginTop: 15
    },
    errorText: {
        color: 'red',
        margin: 1
    }
})

export { FormInput }