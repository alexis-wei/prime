<!--
  @component
  A 2D marker that can accept a texture.
  Used for rendering the base position, endpoints, etc.
-->
<script
  lang="ts"
  context="module"
>
import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();
</script>

<script lang="ts">
import { T } from '@threlte/core';
import { renderOrder } from './render-order';

export let name: string;
export let url: string;
export let rotation = 0;

const handleSpriteCreate = ({ ref }: { ref: THREE.SpriteMaterial }) => {
  ref.color.set('#ff0047');
};
</script>

<T.Sprite
  {name}
  {...$$restProps}
  renderOrder={renderOrder.markers}
>
  <T.SpriteMaterial
    map={textureLoader.load(url)}
    sizeAttenuation={false}
    {rotation}
    on:create={handleSpriteCreate}
  />
</T.Sprite>
