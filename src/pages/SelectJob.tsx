import React, { useCallback } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { JobInfo, Jobs, jobsDetail, JobType } from 'data/jobs';

const SelectJob = () => {
    const jobTypes = Object.values(JobType).filter(value => !isNaN(Number(value)));
    const innerRenderItem = useCallback(({ item }: { item: JobInfo }) => {
        return (
            <Pressable onPress={() => {}}>
                <Text>{Jobs[item.id]}</Text>
            </Pressable>
        );
    }, []);
    const innerKeyExtractor = useCallback((item: JobInfo) => {
        return item.id.toString();
    }, []);
    const outerRenderItem = useCallback(
        ({ item }: { item: string | JobType }) => {
            return (
                <View>
                    <Pressable>
                        <Text>{JobType[parseInt(item as string, 10)]}</Text>
                    </Pressable>
                    <FlatList
                        data={jobsDetail.filter(value => value.type === parseInt(item as string, 10))}
                        renderItem={innerRenderItem}
                        keyExtractor={innerKeyExtractor}
                    />
                </View>
            );
        },
        [innerKeyExtractor, innerRenderItem],
    );
    const outerKeyExtractor = useCallback((item: string | JobType) => {
        return item.toString();
    }, []);

    return (
        <View style={styles.background}>
            <FlatList data={jobTypes} renderItem={outerRenderItem} keyExtractor={outerKeyExtractor} />
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
