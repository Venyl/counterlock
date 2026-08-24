<script lang="ts">
	import HeroImage from "$lib/components/HeroImage.svelte";
	import Item from "$lib/components/Item.svelte";
	import type { HeroName, ItemName } from "$lib/data";
	import { itemNames, heroCounters } from "$lib/data";
	import { slugify } from "$lib/utils";

	let heroList: HeroName[] = Object.keys(heroCounters) as HeroName[];
	let enemyHeroes: HeroName[] = $state(["None", "None", "None", "None", "None", "None"]);
	let counterItems = $derived.by(() => {
		const items: Array<{
			name: ItemName;
			reasons: string[];
			impact: number;
			heroesCountered: HeroName[];
		}> = itemNames.map((name) => ({
			name,
			impact: 0,
			reasons: [],
			heroesCountered: []
		}));

		for (const hero of enemyHeroes) {
			const counters = heroCounters[hero];
			for (const { counter, reason, important } of counters) {
				const item = items.find((item) => item.name === counter);
				if (!item) return;
				item.impact += important ? 2 : 1;
				item.reasons.push(reason);
				item.heroesCountered.push(hero);
			}
		}

		return items.filter((item) => item.impact > 0).toSorted((a, b) => b.impact - a.impact);
	});

	type Tier = 5 | 4 | 3 | 2 | 1;
	type CounterItem = NonNullable<typeof counterItems>[number];
	function itemFitsTier(item: CounterItem, index: number, tier: Tier): boolean {
		const rangeStart = tier * 0.2;
		const rangeEnd = (tier - 1) * 0.2;
		const impactCeiling = counterItems?.[0].impact ?? 1;
		const relativeImpact = item.impact / impactCeiling;
		return relativeImpact <= rangeStart && relativeImpact > rangeEnd;
	}
</script>

<main>
	<div class="selects">
		{#each [0, 1, 2, 3, 4, 5] as i (i)}
			{@const selectedHero = enemyHeroes[i]}
			<div class="select-wrapper">
				<select bind:value={enemyHeroes[i]}>
					<button>
						{#if selectedHero}
							<HeroImage hero={selectedHero} variant="portrait" />
						{/if}
					</button>
					{#each heroList as hero (hero)}
						<option>
							<HeroImage {hero} variant="icon" />
							{hero}
						</option>
					{/each}
				</select>
				<span>{selectedHero}</span>
			</div>
		{/each}
	</div>
	<div class="counters">
		{#snippet tieredCounterItems(tier: Tier)}
			{@const items = counterItems?.filter((item, i) => itemFitsTier(item, i, tier))}

			{#each items as item (item.name)}
				{const id = `item-${slugify(item.name)}`}
				<li class="item">
					<button interestfor={id} commandfor={id} command="toggle-popover">
						<Item name={item.name} />
					</button>

					<div {id} popover="hint">
						{#each item.reasons as reason, i (reason + i)}
							<p><HeroImage hero={item.heroesCountered[i]} variant="icon" />{reason}</p>
						{/each}
					</div>
				</li>
			{/each}
		{/snippet}

		<div class="tier s-tier">
			<div>S</div>
			<ul>{@render tieredCounterItems(5)}</ul>
		</div>
		<div class="tier a-tier">
			<div>A</div>
			<ul>{@render tieredCounterItems(4)}</ul>
		</div>
		<div class="tier b-tier">
			<div>B</div>
			<ul>{@render tieredCounterItems(3)}</ul>
		</div>
		<div class="tier c-tier">
			<div>C</div>
			<ul>{@render tieredCounterItems(2)}</ul>
		</div>
		<div class="tier d-tier">
			<div>D</div>
			<ul>{@render tieredCounterItems(1)}</ul>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		background-color: color-mix(var(--clr-surface-1), transparent 15%);
		padding-inline: 1rem;
		border: 1px solid var(--clr-surface-2);
		display: flex;
		flex-direction: column;
		gap: 2rem;

		--width-cutout: 1rem;
		width: min(100% - (var(--width-cutout) * 2), 1024px);
		margin-inline: auto;

		@media (width < 800px) {
			--width-cutout: 0;
		}
	}

	.selects {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.select-wrapper {
		background-image: linear-gradient(
			to bottom,
			color-mix(var(--clr-brand), transparent),
			transparent 70%
		);
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		flex-direction: column;
		max-width: 5.5rem;
		aspect-ratio: 28 / 38;
		padding: 0.5rem;
	}

	.select-wrapper span {
		font-size: 0.875rem;
		font-family: "Retail Demo";
		color: var(--clr-brand);
		text-align: center;
		border-radius: 0.25rem;
	}

	select,
	::picker(select) {
		appearance: base-select;
	}

	select {
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		clip-path: padding-box;
	}

	::picker-icon {
		display: none;
	}

	::picker(select) {
		translate: -25% 0.75rem;
		scrollbar-gutter: stable;
		scrollbar-width: thin;
		scrollbar-color: var(--clr-neutral-10) transparent;
		max-height: min(500px, 80vh);
		padding: 0.25rem;
		border-radius: 0.5rem;
		background-color: var(--clr-surface-2);
		border: 1px solid var(--clr-surface-3);
	}

	option {
		padding: 0.5rem;
		border-radius: 0.5rem;

		&::checkmark {
			display: none;
		}

		:global(img) {
			width: 2rem;
			aspect-ratio: 1;
			transition: scale 300ms;
		}

		&:hover :global(img) {
			scale: 1.1;
		}
	}

	.counters {
		margin-top: 2rem;
		display: flex;
		gap: 0.125rem;
		flex-direction: column;
		justify-content: center;
	}

	.tier {
		display: grid;
		grid-template-columns: 120px 1fr;
		/*border-bottom: 1px solid var(--clr-neutral-13);*/
		/*border-right: 1px solid var(--clr-neutral-13);*/

		> div {
			/*border-right: 1px solid var(--clr-neutral-13);*/
			background-color: var(--clr-neutral-13);
			padding: 0.5rem;
			display: grid;
			place-items: center;
			font-size: 1.5rem;
			font-family: "Retail Demo";
			position: relative;

			&::before {
				content: "";
				position: absolute;
				background-color: oklch(0.53 0.12 var(--hue));
				inset: 0 auto 0 0;
				width: 0.25rem;
			}
		}

		/*&:first-of-type {
			border-top: 1px solid var(--clr-neutral-13);
		}

		&:last-of-type {
			border-bottom: none;
		}*/

		ul {
			padding: 0.5rem;
			display: flex;
			gap: 0.5rem;
			flex-wrap: wrap;
			list-style: none;
		}
	}

	.s-tier div {
		--hue: 200;
	}

	.a-tier div {
		--hue: 150;
	}

	.b-tier div {
		--hue: 100;
	}

	.c-tier div {
		--hue: 50;
	}

	.d-tier div {
		--hue: 0;
	}

	.tier:has(ul:empty) div {
		opacity: 0.4;
	}

	.item {
		anchor-scope: --item;

		button {
			anchor-name: --item;
			background-color: transparent;
		}

		div {
			width: calc-size(max-content, min(size, 60vw - 2rem));
			position: absolute;
			position-anchor: --item;
			position-area: bottom center;
			margin-top: 1rem;
			padding: 1rem;
			border-radius: 0.5rem;
			border: 1px solid var(--clr-neutral-13);
			background-color: var(--clr-neutral-14);
			opacity: 0.98;
			flex-direction: column;
			gap: 1rem;
			font-size: 0.875rem;
			color: var(--clr-text-2);

			&:popover-open {
				display: flex;
			}

			p {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				:global(img) {
					width: 4ch;
					height: 4ch;
				}
			}
		}
	}
</style>
