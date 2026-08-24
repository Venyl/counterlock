<script lang="ts">
	import monsterRounds from "$lib/assets/images/items/monster_rounds.webp";
	import toxicBullets from "$lib/assets/images/items/toxic_bullets.webp";
	import ricochet from "$lib/assets/images/items/ricochet.webp";
	import cripplingHeadshot from "$lib/assets/images/items/crippling_headshot.webp";
	import rebuttal from "$lib/assets/images/items/rebuttal.webp";
	import debuffReducer from "$lib/assets/images/items/debuff_reducer.webp";
	import healbane from "$lib/assets/images/items/healbane.webp";
	import reactiveBarrier from "$lib/assets/images/items/reactive_barrier.webp";
	import returnFire from "$lib/assets/images/items/return_fire.webp";
	import counterspell from "$lib/assets/images/items/counterspell.webp";
	import dispelMagic from "$lib/assets/images/items/debuff_remover.webp";
	import metalSkin from "$lib/assets/images/items/metal_skin.webp";
	import indomitable from "$lib/assets/images/items/indomitable.webp";
	import divineBarrier from "$lib/assets/images/items/divine_barrier.webp";
	import inhibitor from "$lib/assets/images/items/inhibitor.webp";
	import juggernaut from "$lib/assets/images/items/juggernaut.webp";
	import phantomStrike from "$lib/assets/images/items/phantom_strike.webp";
	import platedArmor from "$lib/assets/images/items/plated_armor.webp";
	import spellbreaker from "$lib/assets/images/items/spellbreaker.webp";
	import unstoppable from "$lib/assets/images/items/unstoppable.webp";
	import rustedBarrel from "$lib/assets/images/items/rusted_barrel.webp";
	import slowingHex from "$lib/assets/images/items/slowing_hex.webp";
	import spiritSap from "$lib/assets/images/items/spirit_sap.webp";
	import suppressor from "$lib/assets/images/items/suppressor.webp";
	import decay from "$lib/assets/images/items/decay.webp";
	import disarmingHex from "$lib/assets/images/items/disarming_hex.webp";
	import knockdown from "$lib/assets/images/items/knockdown.webp";
	import silenceWave from "$lib/assets/images/items/silence_glyph.webp";
	import arcticBlast from "$lib/assets/images/items/arctic_blast.webp";
	import cursedRelic from "$lib/assets/images/items/cursed_relic.webp";
	import etherealShift from "$lib/assets/images/items/ethereal_shift.webp";
	import focusLens from "$lib/assets/images/items/focus_lens.webp";
	import scourge from "$lib/assets/images/items/scourge.webp";
	import spiritBurn from "$lib/assets/images/items/spirit_burn.webp";

	import type { ItemName } from "$lib/data";

	type Items = Record<
		ItemName,
		{ img: string; category: "weapon" | "vitality" | "spirit"; tier: 1 | 2 | 3 | 4 }
	>;

	const items: Items = {
		"Monster Rounds": {
			img: monsterRounds,
			category: "weapon",
			tier: 1
		},
		"Toxic Bullets": {
			img: toxicBullets,
			category: "weapon",
			tier: 3
		},
		Ricochet: {
			img: ricochet,
			category: "weapon",
			tier: 4
		},
		"Crippling Headshot": {
			img: cripplingHeadshot,
			category: "weapon",
			tier: 4
		},
		Rebuttal: {
			img: rebuttal,
			category: "vitality",
			tier: 1
		},
		"Debuff Reducer": {
			img: debuffReducer,
			category: "vitality",
			tier: 2
		},
		Healbane: {
			img: healbane,
			category: "vitality",
			tier: 2
		},
		"Reactive Barrier": {
			img: reactiveBarrier,
			category: "vitality",
			tier: 2
		},
		"Return Fire": {
			img: returnFire,
			category: "vitality",
			tier: 2
		},
		Counterspell: {
			img: counterspell,
			category: "vitality",
			tier: 3
		},
		"Dispel Magic": {
			img: dispelMagic,
			category: "vitality",
			tier: 3
		},
		"Metal Skin": {
			img: metalSkin,
			category: "vitality",
			tier: 3
		},
		"Divine Barrier": {
			img: divineBarrier,
			category: "vitality",
			tier: 4
		},
		Indomitable: {
			img: indomitable,
			category: "vitality",
			tier: 4
		},
		Inhibitor: {
			img: inhibitor,
			category: "vitality",
			tier: 4
		},
		Juggernaut: {
			img: juggernaut,
			category: "vitality",
			tier: 4
		},
		"Phantom Strike": {
			img: phantomStrike,
			category: "vitality",
			tier: 4
		},
		"Plated Armor": {
			img: platedArmor,
			category: "vitality",
			tier: 4
		},
		Spellbreaker: {
			img: spellbreaker,
			category: "vitality",
			tier: 4
		},
		Unstoppable: {
			img: unstoppable,
			category: "vitality",
			tier: 4
		},
		"Rusted Barrel": {
			img: rustedBarrel,
			category: "spirit",
			tier: 1
		},
		"Slowing Hex": {
			img: slowingHex,
			category: "spirit",
			tier: 2
		},
		"Spirit Sap": {
			img: spiritSap,
			category: "spirit",
			tier: 2
		},
		Suppressor: {
			img: suppressor,
			category: "spirit",
			tier: 2
		},
		Decay: {
			img: decay,
			category: "spirit",
			tier: 3
		},
		"Disarming Hex": {
			img: disarmingHex,
			category: "spirit",
			tier: 3
		},
		Knockdown: {
			img: knockdown,
			category: "spirit",
			tier: 3
		},
		"Silence Wave": {
			img: silenceWave,
			category: "spirit",
			tier: 3
		},
		"Arctic Blast": {
			img: arcticBlast,
			category: "spirit",
			tier: 4
		},
		"Cursed Relic": {
			img: cursedRelic,
			category: "spirit",
			tier: 4
		},
		"Ethereal Shift": {
			img: etherealShift,
			category: "spirit",
			tier: 4
		},
		"Focus Lens": {
			img: focusLens,
			category: "spirit",
			tier: 4
		},
		Scourge: {
			img: scourge,
			category: "spirit",
			tier: 4
		},
		"Spirit Burn": {
			img: spiritBurn,
			category: "spirit",
			tier: 4
		}
	};

	type Props = {
		name: ItemName;
	};

	const { name }: Props = $props();
	const item = $derived(items[name]);
	const longNames = ["Counterspell", "Indomitable", "Spellbreaker", "Unstoppable"];
</script>

<div class="{item.category} tier-{item.tier}">
	<img src={item.img} alt={name} />
	<p class:smaller-text={longNames.includes(name)}>{name}</p>
</div>

<style>
	div {
		display: grid;
		grid-template-rows: 4em 2.5em;
		place-items: center;
		max-width: 4.375em;
		border-radius: 0.25em;

		img {
			border-top-left-radius: 0.25em;
			border-top-right-radius: 0.25em;
		}

		p {
			translate: 0 0.125em;
			line-height: 1.1;
			text-align: center;
			font-size: 0.75em;
			margin-inline: 0.125rem;
			font-family: "Retail Demo", sans-serif;

			&.smaller-text {
				font-size: 0.625em;
			}
		}
	}

	.weapon {
		&.tier-1 {
			background-color: #e6cc9c;
			color: #1a1510;
		}

		&.tier-2 {
			background-color: #caa96e;
			color: #1a1510;
		}

		&.tier-3 {
			background-color: #b2824c;
			color: #1a1510;
		}

		&.tier-4 {
			background-color: #473f39;
			color: #e4c5a1;
		}
	}

	.vitality {
		&.tier-1 {
			background-color: #d2d9a0;
			color: #1a1510;
		}

		&.tier-2 {
			background-color: #a4b181;
			color: #1a1510;
		}

		&.tier-3 {
			background-color: #7e8f5c;
			color: #1a1510;
		}

		&.tier-4 {
			background-color: #48473c;
			color: #c2e7cd;
		}
	}

	.spirit {
		&.tier-1 {
			background-color: #dfc5e7;
			color: #1a1510;
		}

		&.tier-2 {
			background-color: #b2a3c4;
			color: #1a1510;
		}

		&.tier-3 {
			background-color: #8d88b7;
			color: #1a1510;
		}

		&.tier-4 {
			background-color: #4f4b4a;

			color: #e3d4f2;
		}
	}
</style>
