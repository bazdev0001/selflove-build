export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  classId: string;
  className: string;
  teacher: string;
  date: string;
  time: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  price: string;
  createdAt: Date;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: object;
}

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  label?: string;
  error?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export interface CardProps {
  children: React.ReactNode;
  style?: object;
}

export interface YogaTemplate {
  id: string;
  name: string;
  style: string;
  color: string;
}

export interface YogaClass {
  id: string;
  name: string;
  teacher: string;
  time: string;
  duration: string;
  price: string;
}
