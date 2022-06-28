import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { JobInfo, Jobs, jobsDetail, JobType } from 'data/jobs';
import { standardHeight, standardWidth } from 'styles';

const SelectJob = () => {
    const jobTypes = Object.values(JobType).filter(value => !isNaN(Number(value)));
    const jobTypesLength = jobTypes.length;

    const [visible, setVisible] = useState<boolean[]>([]);
    useEffect(() => {
        for (let i = 0; i < jobTypesLength; i++) {
            setVisible(prev => [...prev, false]);
        }
    }, [jobTypesLength]);

    const innerRenderItem = useCallback(({ item }: { item: JobInfo }) => {
        return (
            <Pressable style={styles.item} onPress={() => {}}>
                <Text>{Jobs[item.id]}</Text>
            </Pressable>
        );
    }, []);
    const innerKeyExtractor = useCallback((item: JobInfo) => {
        return item.id.toString();
    }, []);
    const outerRenderItem = useCallback(
        ({ item, index }: { item: string | JobType; index: number }) => {
            return (
                <View>
                    <Pressable
                        style={styles.item}
                        onPress={() => {
                            let newVisible = [...visible];
                            newVisible[index] = !newVisible[index];
                            setVisible(newVisible);
                        }}>
                        <Text>{JobType[parseInt(item as string, 10)]}</Text>
                    </Pressable>
                    {visible[index] && (
                        <FlatList
                            data={jobsDetail.filter(value => value.type === parseInt(item as string, 10))}
                            renderItem={innerRenderItem}
                            keyExtractor={innerKeyExtractor}
                        />
                    )}
                </View>
            );
        },
        [innerKeyExtractor, innerRenderItem, visible],
    );
    const outerKeyExtractor = useCallback((item: string | JobType) => {
        return item.toString();
    }, []);

    return (
        <View style={styles.background}>
            <FlatList
                data={jobTypes}
                renderItem={outerRenderItem}
                keyExtractor={outerKeyExtractor}
                style={styles.jobTypeFlatList}
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
    jobTypeFlatList: {
        flex: 1,
        width: standardWidth(360),
        backgroundColor: 'red',
    },
    item: {
        width: standardWidth(360),
        height: standardHeight(50),
        justifyContent: 'center',
    },
});

export default SelectJob;
