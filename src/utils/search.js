const normalize = value => String(value ?? '').toLowerCase();

const valueForPath = (item, path) => path.split('.').reduce((value, key) => value?.[key], item);

const flattenSearchValue = value => {
  if (value == null) return '';
  if (Array.isArray(value)) return value.map(flattenSearchValue).join(' ');
  if (typeof value === 'object') return Object.values(value).map(flattenSearchValue).join(' ');
  return String(value);
};

export function matchesQuery(item, query, fields = []) {
  const needle = normalize(query).trim();
  if (!needle) return true;
  const haystack = fields.length
    ? fields.map(field => flattenSearchValue(valueForPath(item, field))).join(' ')
    : flattenSearchValue(item);
  return normalize(haystack).includes(needle);
}
