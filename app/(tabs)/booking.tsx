import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { setDocument } from '../../services/firestore';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Colors } from '../../constants/colors';
import { YOGA_CLASSES } from '../../constants/config';
import { Collections } from '../../constants/config';

export default function BookingScreen(): React.JSX.Element {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleBook = async (): Promise<void> => {
    if (!selectedClass) {
      Alert.alert('Select a class', 'Please choose a class to book');
      return;
    }

    if (!user) {
      Alert.alert('Sign in required', 'Please sign in to book a class');
      return;
    }

    const cls = YOGA_CLASSES.find((c) => c.id === selectedClass);
    if (!cls) return;

    try {
      setLoading(true);
      const bookingId = `${user.uid}_${selectedClass}_${Date.now()}`;
      await setDocument(Collections.BOOKINGS, bookingId, {
        userId: user.uid,
        classId: cls.id,
        className: cls.name,
        teacher: cls.teacher,
        time: cls.time,
        price: cls.price,
        message,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      });
      Alert.alert(
        'Booking Confirmed!',
        `You have booked ${cls.name} with ${cls.teacher} at ${cls.time}. See you on the mat!`
      );
      setSelectedClass(null);
      setMessage('');
    } catch (error) {
      Alert.alert('Booking Failed', 'Could not complete your booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Book a Class</Text>
        <Text style={styles.subtitle}>Reserve your spot on the mat</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose your class</Text>
        {YOGA_CLASSES.map((cls) => (
          <Card
            key={cls.id}
            style={[
              styles.classCard,
              selectedClass === cls.id && styles.classCardSelected,
            ]}
          >
            <View style={styles.classRow}>
              <View style={styles.classInfo}>
                <Text style={styles.className}>{cls.name}</Text>
                <Text style={styles.classDetail}>{cls.teacher} · {cls.time}</Text>
                <Text style={styles.classDuration}>{cls.duration}</Text>
              </View>
              <View style={styles.classRight}>
                <Text style={styles.price}>{cls.price}</Text>
                <Button
                  title={selectedClass === cls.id ? 'Selected' : 'Select'}
                  onPress={(): void => setSelectedClass(cls.id)}
                  variant={selectedClass === cls.id ? 'primary' : 'outline'}
                  style={styles.selectBtn}
                />
              </View>
            </View>
          </Card>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Card>
          <Text style={styles.contactLabel}>Email us</Text>
          <Text style={styles.contactValue}>hello@lumiereYoga.com</Text>
          <Text style={styles.contactLabel}>Phone</Text>
          <Text style={styles.contactValue}>+44 20 7946 0123</Text>
          <Text style={styles.contactLabel}>Studio</Text>
          <Text style={styles.contactValue}>12 Serenity Lane, London, SW1 4YG</Text>
        </Card>
      </View>

      <View style={styles.section}>
        <Input
          label="Special requests or message (optional)"
          value={message}
          onChangeText={setMessage}
          placeholder="Any injuries, dietary requirements or notes..."
          autoCapitalize="sentences"
        />

        <Button
          title="Confirm Booking"
          onPress={handleBook}
          loading={loading}
          disabled={!selectedClass}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 24,
    paddingTop: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    marginTop: 4,
    fontStyle: 'italic',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  classCard: {
    marginBottom: 10,
  },
  classCardSelected: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  classRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
  },
  classDetail: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  classDuration: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 1,
  },
  classRight: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 6,
  },
  selectBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    minHeight: 36,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 10,
  },
  contactValue: {
    fontSize: 15,
    color: Colors.text,
    marginTop: 2,
  },
});
