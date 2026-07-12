import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { signIn } from '../../services/auth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Colors } from '../../constants/colors';

export default function SignInScreen(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async (): Promise<void> => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      setLoading(true);
      await signIn(email, password);
    } catch (error) {
      Alert.alert('Sign In Failed', 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.brand}>Lumière</Text>
        <Text style={styles.brandSub}>YOGA</Text>
        <Text style={styles.tagline}>Find your light within</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to your practice</Text>

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
          placeholder="Your password"
          secureTextEntry
        />

        <Button
          title="Sign In"
          onPress={handleSignIn}
          loading={loading}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>New to Lumière? </Text>
          <Link href="/(auth)/sign-up">
            <Text style={styles.link}>Create account</Text>
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
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '300',
    color: Colors.white,
    letterSpacing: 4,
  },
  brandSub: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.accent,
    letterSpacing: 8,
    marginTop: -4,
  },
  tagline: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    marginTop: 8,
    fontStyle: 'italic',
  },
  form: {
    flex: 1,
    padding: 28,
    paddingTop: 36,
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
