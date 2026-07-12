import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { signOut } from '../../services/auth';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Colors } from '../../constants/colors';

export default function ProfileScreen(): React.JSX.Element {
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = async (): Promise<void> => {
    try {
      setLoading(true);
      await signOut();
    } catch (error) {
      Alert.alert('Error', 'Could not sign out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.email ? user.email[0].toUpperCase() : 'L'}
          </Text>
        </View>
        <Text style={styles.displayName}>
          {user?.email ? user.email.split('@')[0] : 'Yogi'}
        </Text>
        <Text style={styles.memberLabel}>Lumière Member</Text>
      </View>

      <View style={styles.section}>
        <Card>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.email ?? 'Not available'}</Text>

          <Text style={styles.label}>Member since</Text>
          <Text style={styles.value}>
            {user?.metadata?.creationTime
              ? new Date(user.metadata.creationTime).toLocaleDateString('en-GB', {
                  month: 'long',
                  year: 'numeric',
                })
              : 'Recently joined'}
          </Text>
        </Card>
      </View>

      <View style={styles.section}>
        <Card>
          <Text style={styles.statTitle}>Practice Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Classes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Hours</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Button
          title="Sign Out"
          onPress={handleSignOut}
          loading={loading}
          variant="outline"
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
  heroSection: {
    backgroundColor: Colors.primary,
    paddingVertical: 36,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
  },
  displayName: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
    textTransform: 'capitalize',
  },
  memberLabel: {
    fontSize: 13,
    color: Colors.white,
    opacity: 0.7,
    marginTop: 4,
    letterSpacing: 1,
  },
  section: {
    padding: 20,
    paddingBottom: 0,
  },
  label: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontWeight: '600',
  },
  value: {
    fontSize: 15,
    color: Colors.text,
    marginTop: 3,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});
