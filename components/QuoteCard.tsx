import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { BlurMask, Canvas, Rect } from '@shopify/react-native-skia';

const QuoteCard = () => {
  const progressPercent = 65;
  const progressWidth = Dimensions.get('window').width * 0.7;
  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progressPercent,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progressPercent]);

  // Interpolate dot position
  const dotTranslate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, progressWidth - 14],
    extrapolate: 'clamp',
  });

  // For Skia blur, you would use a Canvas overlay
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Today’s Quote</Text>
      <Text style={styles.quote}>
        “You must do the things, you think you cannot do.”
      </Text>
      <Text style={styles.progressText}>Progress {progressPercent}%</Text>

      <View style={[styles.progressContainer, { width: progressWidth }]}>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                width: animatedProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
          {/* Animated Dot */}
          <Animated.View
            style={[
              styles.dot,
              { transform: [{ translateX: dotTranslate }] },
            ]}
          />
          {/* Blur Effect */}
          <Canvas style={StyleSheet.absoluteFill}>
            <Rect
              x={dotTranslate}
              y={-8}
              width={40}
              height={20}
              color="#1e3a8a"
            >
              <BlurMask blur={16} style="solid" />
            </Rect>
          </Canvas>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  quote: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 12,
  },
  progressText: {
    color: '#1e3a8a',
    fontSize: 13,
    marginBottom: 4,
  },
  progressContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'visible',
    justifyContent: 'center',
  },
  progressBarFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 6,
    backgroundColor: '#1e3a8a',
    borderRadius: 10,
  },
  dot: {
    position: 'absolute',
    top: -4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1e3a8a',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 3,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});

export default QuoteCard;
