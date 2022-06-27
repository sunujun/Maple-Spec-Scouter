import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { JobType } from 'data/jobs';

const SelectJob = () => {
    const jobTypes = Object.values(JobType)
        .filter(key => typeof JobType[key as JobType] === 'number')
        .map(key => ({ name: key }));
    // const jobs = Object.values(info);

    return (
        <View style={styles.background}>
            <FlatList
                data={jobTypes}
                renderItem={({ item }) => (
                    <View>
                        <Pressable>
                            <Text>{item.name}</Text>
                        </Pressable>
                        {/* <FlatList
                            data={outerItem['data'] ? outerItem['data'] : []}
                            renderItem={({ innerItem }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Home', {
                                            artist_id: innerItem['artistID'],
                                        });
                                    }}>
                                    <View>
                                        <Text>Inner FlatList</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={innerItem => innerItem.id}
                        /> */}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'orange',
    },
});

export default SelectJob;
