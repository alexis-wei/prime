<!--
@component

For user triggered actions.

```svelte
<Button type="submit" variant="success" on:click={onClick} />
```
-->
<svelte:options immutable />

<script lang="ts">
import cx from 'classnames';
import { Icon, type IconName } from '$lib';
import { preventHandler } from '$lib/prevent-handler';

/** Whether or not the button accepts clicks. */
export let disabled = false;

/** The behavior of the button. */
export let type: 'button' | 'submit' | 'reset' = 'button';

/** The communicated action type to the user. */
export let variant:
  | 'primary'
  | 'dark'
  | 'ghost'
  | 'danger'
  | 'outline-danger'
  | 'success' = 'primary';

/** The text that appears in a popup box when mouse is over the element. */
export let title = '';

/**
 * The icon shown in the button.
 */
export let icon: IconName | undefined = undefined;

/** The width of the button. */
export let width: 'full' | 'default' = 'default';

/** Additional CSS classes to pass to the button. */
let extraClasses: cx.Argument = '';
export { extraClasses as cx };

$: handleDisabled = preventHandler(disabled);
</script>

<button
  {type}
  {title}
  aria-disabled={disabled ? true : undefined}
  class={cx(
    'inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap border py-1.5 text-xs',
    {
      'flex w-full': width === 'full',
      'inline-flex': width !== 'full',
      'px-3': !icon,
      'pl-2 pr-3': icon,
      'cursor-not-allowed !border-disabled-light !bg-disabled-light text-disabled-dark':
        disabled,
      'border-light bg-light hover:border-medium hover:bg-medium active:bg-gray-2':
        variant === 'primary' && !disabled,
      'border-gray-9 bg-gray-9 text-white hover:border-black hover:bg-black active:bg-[#000]':
        variant === 'dark' && !disabled,
      'border-transparent text-default hover:bg-ghost-light active:border-ghost-medium active:bg-ghost-medium':
        variant === 'ghost' && !disabled,
      'border-danger-dark bg-danger-dark text-white hover:bg-[#aa2a2b] active:bg-[#9e2728]':
        variant === 'danger' && !disabled,
      'border-success-dark bg-success-dark text-white':
        variant === 'success' && !disabled,
      'border-danger-medium bg-danger-light text-danger-dark hover:bg-[#f5dfdc] active:bg-[#f6d7d3]':
        variant === 'outline-danger' && !disabled,
    },
    extraClasses
  )}
  {...$$restProps}
  on:click
  on:click|capture={handleDisabled}
>
  {#if icon}
    <span
      class={cx({
        'text-gray-6': variant === 'primary' || variant === 'ghost',
        'text-gray-4': disabled,
      })}
    >
      <Icon name={icon} />
    </span>
  {/if}

  <span>
    <slot />
  </span>
</button>
