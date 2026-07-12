import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import { Colors } from '../../constants/colors';
import { YOGA_CLASSES } from '../../constants/config';

export default function HomeScreen(): React.JSX.Element {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.brand}>Lumière</Text>
        <Text style={styles.brandSub}>YOGA</Text>
        <Text style={styles.tagline}>Find your light within</Text>
        <Text style={styles.welcome}>
          {user?.email ? `Welcome back, ${user.email.split('@')[0]}` : 'Welcome'}
        </Text>
      </View>

      {/* Today's classes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today&apos;s Classes</Text>
        {YOGA_CLASSES.map((cls) => (
          <Card key={cls.id} style={styles.classCard}>
            <View style={styles.classRow}>
              <View style={styles.classInfo}>
                <Text style={styles.className}>{cls.name}</Text>
                <Text style={styles.classTeacher}>{cls.teacher}</Text>
                <Text style={styles.classTime}>{cls.time} · {cls.duration}</Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.price}>{cls.price}</Text>
              </View>
            </View>
          </Card>
        ))}
      </View>

      {/* Quote */}
      <View style={styles.quoteBlock}>
        <Text style={styles.quote}>
          &ldquo;The body benefits from movement, and the mind benefits from stillness.&rdquo;
        </Text>
        <Text style={styles.quoteAuthor}>— Sakyong Mipham</Text>
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
    paddingBottom: 32,
  },
  hero: {
    backgroundColor: Colors.primary,
    paddingTop: 36,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  brand: {
    fontSize: 42,
    fontWeight: '300',
    color: Colors.white,
    letterSpacing: 5,
  },
  brandSub: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.accent,
    letterSpacing: 8,
    marginTop: -6,
  },
  tagline: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.85,
    marginTop: 10,
    fontStyle: 'italic',
  },
  welcome: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.7,
    marginTop: 6,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  classCard: {
    marginBottom: 12,
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
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  classTeacher: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  classTime: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 3,
  },
  priceTag: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 12,
  },
  price: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  quoteBlock: {
    marginHorizontal: 20,
    marginTop: 8,
    padding: 20,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: Colors.accent,
  },
  quote: {
    fontSize: 15,
    color: Colors.text,
    fontStyle: 'italic',
    lineHeight: 22,
  },
  quoteAuthor: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 8,
    textAlign: 'right',
  },
});
