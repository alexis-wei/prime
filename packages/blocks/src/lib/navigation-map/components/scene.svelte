<script lang="ts">
import * as THREE from 'three';
import { createEventDispatcher } from 'svelte';
import { T, useThrelte } from '@threlte/core';
import type { LngLat } from 'maplibre-gl';
import type { Obstacle } from '../types';
import { view, obstacles, selected, environment } from '../stores';
import { computeBoundingPlugin } from '../plugins/compute-bounding';
import { renderPlugin } from '../plugins/render';
import { interactivityPlugin } from '../plugins/interactivity';
import { createObstacle } from '../lib/create-obstacle';
import { createName } from '../lib/create-name';
import ObstacleGeometries from './obstacle.svelte';
import Drawtool from './draw-tool.svelte';

const dispatch = createEventDispatcher<{
  'update-obstacles': Obstacle[];
}>();

renderPlugin();
computeBoundingPlugin();
interactivityPlugin();

const { renderer } = useThrelte();
const clippingPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

const handleUpdate = () => {
  dispatch('update-obstacles', $obstacles);
};

const handleDraw = ({
  width,
  height,
  center,
}: {
  width: number;
  height: number;
  center: LngLat;
}) => {
  const names = $obstacles.map((obstacle) => obstacle.name);
  const name = createName(names, 'obstacle', $obstacles.length);
  const obstacle = createObstacle(name, center);

  if (obstacle.geometries[0]!.type === 'box') {
    obstacle.geometries[0]!.length = width;
    obstacle.geometries[0]!.width = height;
  }

  $obstacles = [obstacle, ...$obstacles];
  $selected = obstacle.name;

  dispatch('update-obstacles', $obstacles);
};

$: flat = $view === '2D';

// This clips against the map so that objects intersecting sea level will not render over the map
$: renderer.clippingPlanes = flat ? [] : [clippingPlane];
</script>

<T.AmbientLight intensity={flat ? 2 : 1.5} />

{#if !flat}
  <T.DirectionalLight intensity={1.5} />
{/if}

{#each $obstacles as obstacle (obstacle.name)}
  <ObstacleGeometries
    name={obstacle.name}
    on:update={handleUpdate}
  />
{/each}

{#if $environment === 'configure'}
  <Drawtool on:update={handleDraw} />
{/if}
