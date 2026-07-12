import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import { YOGA_TEMPLATES } from '../../constants/config';

export default function TemplatesScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Website Templates</Text>
        <Text style={styles.subtitle}>10 premium designs for Lumière Yoga</Text>
      </View>

      <View style={styles.grid}>
        {YOGA_TEMPLATES.map((template) => (
          <TouchableOpacity
            key={template.id}
            style={[styles.templateCard, { backgroundColor: template.color }]}
            activeOpacity={0.85}
          >
            <View style={styles.templatePreview}>
              <View style={styles.previewBar} />
              <View style={[styles.previewBlock, styles.previewBlockWide]} />
              <View style={styles.previewBlockRow}>
                <View style={styles.previewBlockSmall} />
                <View style={styles.previewBlockSmall} />
              </View>
            </View>
            <View style={styles.templateLabel}>
              <Text style={styles.templateNumber}>{template.id}</Text>
              <Text style={styles.templateName}>{template.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.note}>
        <Text style={styles.noteText}>
          All templates are fully responsive HTML/CSS designs with Lumière Yoga branding,
          ready for client delivery.
        </Text>
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
  header: {
    padding: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  templateCard: {
    width: '47%',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 4,
  },
  templatePreview: {
    padding: 12,
    paddingBottom: 8,
    minHeight: 100,
  },
  previewBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    marginBottom: 8,
  },
  previewBlock: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    marginBottom: 6,
  },
  previewBlockWide: {
    width: '90%',
  },
  previewBlockRow: {
    flexDirection: 'row',
    gap: 6,
  },
  previewBlockSmall: {
    flex: 1,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 4,
  },
  templateLabel: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 10,
  },
  templateNumber: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '600',
    letterSpacing: 1,
  },
  templateName: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: '700',
    marginTop: 1,
  },
  note: {
    margin: 20,
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 10,
  },
  noteText: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },
});
