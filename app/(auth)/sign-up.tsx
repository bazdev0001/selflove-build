import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { signUp } from '../../services/auth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Colors } from '../../constants/colors';

export default function SignUpScreen(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async (): Promise<void> => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password);
    } catch (error) {
      Alert.alert('Sign Up Failed', 'Could not create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.brand}>Lumière</Text>
        <Text style={styles.brandSub}>YOGA</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Start your journey</Text>
        <Text style={styles.subtitle}>Create your Lumière account</Text>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password (min 6 chars)"
          secureTextEntry
        />

        <Input
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />

        <Button
          title="Create Account"
          onPress={handleSignUp}
          loading={loading}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already practising? </Text>
          <Link href="/(auth)/sign-in">
            <Text style={styles.link}>Sign In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  brand: {
    fontSize: 36,
    fontWeight: '300',
    color: Colors.white,
    letterSpacing: 4,
  },
  brandSub: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.accent,
    letterSpacing: 8,
    marginTop: -2,
  },
  form: {
    flex: 1,
    padding: 28,
    paddingTop: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 28,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },
});
