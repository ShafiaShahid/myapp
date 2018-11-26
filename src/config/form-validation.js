export const _hasMinLength = (value, minLength) => (String(value).length >= minLength ? undefined : `Text should be at least ${minLength} characters long`);

export const _hasMaxLength = (value, maxLength) => (String(value).length <= maxLength ? undefined : `Text should be at most ${maxLength} characters long`);

export const _hasLength = (value, length) => (String(value).length === length ? undefined : `Text should be ${length} characters long`);

export const isNumber = (value) => (String(value).match(/^-{0,1}\d+$/) ?  undefined : 'Text should be a valid number');

export const isAlphanumeric = (value) => (String(value).match(/^\w+$/) ?  undefined : 'Text should be alphanumeric');

export const isAlphabetsOnly = (value) => (String(value).match(/^[A-Z]+$/i) ?  undefined : 'Text should be alphabets only');