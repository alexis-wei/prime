<!--
@component
  
For numeric user inputs.

```svelte
<NumericInput type="integer" on:input={onInput} />
```
-->
<svelte:options immutable />

<script lang="ts">
import type cx from 'classnames';
import Input from './input.svelte';
import type { NumericInputTypes } from './utils';

/** The input type */
export let type: NumericInputTypes | undefined = 'number';

/** The value of the input, if any. */
export let value: number | undefined = undefined;

/** The amount to increment/decrement when using the up/down arrows. */
export let step = 1;

/** The HTML input element. */
export let input: HTMLInputElement | undefined = undefined;

/** Additional CSS classes to pass to the input. */
let extraClasses: cx.Argument = '';
export { extraClasses as cx };

$: isNumber = type === 'number';
$: pattern = isNumber ? '^([-+,0-9.]+)' : '[0-9]+';
</script>

<Input
  type="number"
  cx={extraClasses}
  {pattern}
  {step}
  {...$$restProps}
  bind:value
  bind:input
  on:input
  on:change
  on:blur
  on:keydown
/>
