<script setup lang="ts">
import {
  type DynamicInputProps,
  FormControl,
  getTranslation,
} from "@yoe-form/nuxt";

defineProps<DynamicInputProps>();
</script>

<template>
  <FormControl>
    <template
      v-if="
        ['text', 'email', 'password', 'number', 'url', 'textarea'].includes(
          field.type,
        )
      "
    >
      <v-text-field
        :label="getTranslation(field.label, language)"
        :type="field.type"
        v-bind="componentField"
        :placeholder="getTranslation(field.placeholder, language)"
      />
    </template>
    <template v-else-if="field.type === 'checkbox' || field.type === 'switch'">
      <v-checkbox
        :label="getTranslation(field.label, language)"
        v-bind="componentField"
      />
    </template>
    <template v-else-if="field.type === 'select'">
      <v-select
        :label="getTranslation(field.label, language)"
        v-bind="componentField"
        :items="field.options.map((o) => getTranslation(o.name, language))"
      />
    </template>
    <template v-else-if="field.type === 'radio'">
      <v-radio-group
        :model-value="componentField"
        v-bind="componentField"
        :label="getTranslation(field.label, language)"
      >
        <v-radio
          v-for="option in field.options"
          :label="getTranslation(option.name, language)"
          :value="option.value"
        />
      </v-radio-group>
    </template>
    <template v-else-if="field.type === 'date'">
      <v-date-picker
        :model-value="componentField"
        v-bind="componentField"
        :label="getTranslation(field.label, language)"
      >
      </v-date-picker>
    </template>
  </FormControl>
</template>
