<script lang="ts">
	import noneIcon from "$lib/assets/images/hero-icons/none.webp";
	import abramsIcon from "$lib/assets/images/hero-icons/abrams.webp";
	import apolloIcon from "$lib/assets/images/hero-icons/apollo.webp";
	import bebopIcon from "$lib/assets/images/hero-icons/bebop.webp";
	import billyIcon from "$lib/assets/images/hero-icons/billy.webp";
	import calicoIcon from "$lib/assets/images/hero-icons/calico.webp";
	import celesteIcon from "$lib/assets/images/hero-icons/celeste.webp";
	import doormanIcon from "$lib/assets/images/hero-icons/doorman.webp";
	import drifterIcon from "$lib/assets/images/hero-icons/drifter.webp";
	import dynamoIcon from "$lib/assets/images/hero-icons/dynamo.webp";
	import gravesIcon from "$lib/assets/images/hero-icons/graves.webp";
	import greyTalonIcon from "$lib/assets/images/hero-icons/grey-talon.webp";
	import hazeIcon from "$lib/assets/images/hero-icons/haze.webp";
	import hollidayIcon from "$lib/assets/images/hero-icons/holliday.webp";
	import infernusIcon from "$lib/assets/images/hero-icons/infernus.webp";
	import ivyIcon from "$lib/assets/images/hero-icons/ivy.webp";
	import kelvinIcon from "$lib/assets/images/hero-icons/kelvin.webp";
	import ladyGeistIcon from "$lib/assets/images/hero-icons/lady-geist.webp";
	import lashIcon from "$lib/assets/images/hero-icons/lash.webp";
	import mcginnisIcon from "$lib/assets/images/hero-icons/mcginnis.webp";
	import minaIcon from "$lib/assets/images/hero-icons/mina.webp";
	import mirageIcon from "$lib/assets/images/hero-icons/mirage.webp";
	import moAndKrillIcon from "$lib/assets/images/hero-icons/mo-and-krill.webp";
	import paigeIcon from "$lib/assets/images/hero-icons/paige.webp";
	import paradoxIcon from "$lib/assets/images/hero-icons/paradox.webp";
	import pocketIcon from "$lib/assets/images/hero-icons/pocket.webp";
	import remIcon from "$lib/assets/images/hero-icons/rem.webp";
	import sevenIcon from "$lib/assets/images/hero-icons/seven.webp";
	import shivIcon from "$lib/assets/images/hero-icons/shiv.webp";
	import silverIcon from "$lib/assets/images/hero-icons/silver.webp";
	import sinclairIcon from "$lib/assets/images/hero-icons/sinclair.webp";
	import venatorIcon from "$lib/assets/images/hero-icons/venator.webp";
	import victorIcon from "$lib/assets/images/hero-icons/victor.webp";
	import vindictaIcon from "$lib/assets/images/hero-icons/vindicta.webp";
	import viscousIcon from "$lib/assets/images/hero-icons/viscous.webp";
	import vyperIcon from "$lib/assets/images/hero-icons/vyper.webp";
	import wardenIcon from "$lib/assets/images/hero-icons/warden.webp";
	import wraithIcon from "$lib/assets/images/hero-icons/wraith.webp";
	import yamatoIcon from "$lib/assets/images/hero-icons/yamato.webp";

	import nonePortrait from "$lib/assets/images/hero-portraits/none.webp";
	import abramsPortrait from "$lib/assets/images/hero-portraits/abrams.webp";
	import apolloPortrait from "$lib/assets/images/hero-portraits/apollo.webp";
	import bebopPortrait from "$lib/assets/images/hero-portraits/bebop.webp";
	import billyPortrait from "$lib/assets/images/hero-portraits/billy.webp";
	import calicoPortrait from "$lib/assets/images/hero-portraits/calico.webp";
	import celestePortrait from "$lib/assets/images/hero-portraits/celeste.webp";
	import doormanPortrait from "$lib/assets/images/hero-portraits/doorman.webp";
	import drifterPortrait from "$lib/assets/images/hero-portraits/drifter.webp";
	import dynamoPortrait from "$lib/assets/images/hero-portraits/dynamo.webp";
	import gravesPortrait from "$lib/assets/images/hero-portraits/graves.webp";
	import greyTalonPortrait from "$lib/assets/images/hero-portraits/grey-talon.webp";
	import hazePortrait from "$lib/assets/images/hero-portraits/haze.webp";
	import hollidayPortrait from "$lib/assets/images/hero-portraits/holliday.webp";
	import infernusPortrait from "$lib/assets/images/hero-portraits/infernus.webp";
	import ivyPortrait from "$lib/assets/images/hero-portraits/ivy.webp";
	import kelvinPortrait from "$lib/assets/images/hero-portraits/kelvin.webp";
	import ladyGeistPortrait from "$lib/assets/images/hero-portraits/lady-geist.webp";
	import lashPortrait from "$lib/assets/images/hero-portraits/lash.webp";
	import mcginnisPortrait from "$lib/assets/images/hero-portraits/mcginnis.webp";
	import minaPortrait from "$lib/assets/images/hero-portraits/mina.webp";
	import miragePortrait from "$lib/assets/images/hero-portraits/mirage.webp";
	import moAndKrillPortrait from "$lib/assets/images/hero-portraits/mo-and-krill.webp";
	import paigePortrait from "$lib/assets/images/hero-portraits/paige.webp";
	import paradoxPortrait from "$lib/assets/images/hero-portraits/paradox.webp";
	import pocketPortrait from "$lib/assets/images/hero-portraits/pocket.webp";
	import remPortrait from "$lib/assets/images/hero-portraits/rem.webp";
	import sevenPortrait from "$lib/assets/images/hero-portraits/seven.webp";
	import shivPortrait from "$lib/assets/images/hero-portraits/shiv.webp";
	import silverPortrait from "$lib/assets/images/hero-portraits/silver.webp";
	import sinclairPortrait from "$lib/assets/images/hero-portraits/sinclair.webp";
	import venatorPortrait from "$lib/assets/images/hero-portraits/venator.webp";
	import victorPortrait from "$lib/assets/images/hero-portraits/victor.webp";
	import vindictaPortrait from "$lib/assets/images/hero-portraits/vindicta.webp";
	import viscousPortrait from "$lib/assets/images/hero-portraits/viscous.webp";
	import vyperPortrait from "$lib/assets/images/hero-portraits/vyper.webp";
	import wardenPortrait from "$lib/assets/images/hero-portraits/warden.webp";
	import wraithPortrait from "$lib/assets/images/hero-portraits/wraith.webp";
	import yamatoPortrait from "$lib/assets/images/hero-portraits/yamato.webp";
	import type { HeroName } from "$lib/data";

	export const heroImages: Record<HeroName, { icon: string; portrait: string }> = {
		None: {
			icon: noneIcon,
			portrait: nonePortrait
		},
		Abrams: {
			icon: abramsIcon,
			portrait: abramsPortrait
		},
		Apollo: {
			icon: apolloIcon,
			portrait: apolloPortrait
		},
		Bebop: {
			icon: bebopIcon,
			portrait: bebopPortrait
		},
		Billy: {
			icon: billyIcon,
			portrait: billyPortrait
		},
		Calico: {
			icon: calicoIcon,
			portrait: calicoPortrait
		},
		Celeste: {
			icon: celesteIcon,
			portrait: celestePortrait
		},
		Doorman: {
			icon: doormanIcon,
			portrait: doormanPortrait
		},
		Drifter: {
			icon: drifterIcon,
			portrait: drifterPortrait
		},
		Dynamo: {
			icon: dynamoIcon,
			portrait: dynamoPortrait
		},
		Graves: {
			icon: gravesIcon,
			portrait: gravesPortrait
		},
		"Grey Talon": {
			icon: greyTalonIcon,
			portrait: greyTalonPortrait
		},
		Haze: {
			icon: hazeIcon,
			portrait: hazePortrait
		},
		Holliday: {
			icon: hollidayIcon,
			portrait: hollidayPortrait
		},
		Infernus: {
			icon: infernusIcon,
			portrait: infernusPortrait
		},
		Ivy: {
			icon: ivyIcon,
			portrait: ivyPortrait
		},
		Kelvin: {
			icon: kelvinIcon,
			portrait: kelvinPortrait
		},
		"Lady Geist": {
			icon: ladyGeistIcon,
			portrait: ladyGeistPortrait
		},
		Lash: {
			icon: lashIcon,
			portrait: lashPortrait
		},
		McGinnis: {
			icon: mcginnisIcon,
			portrait: mcginnisPortrait
		},
		Mina: {
			icon: minaIcon,
			portrait: minaPortrait
		},
		Mirage: {
			icon: mirageIcon,
			portrait: miragePortrait
		},
		"Mo & Krill": {
			icon: moAndKrillIcon,
			portrait: moAndKrillPortrait
		},
		Paige: {
			icon: paigeIcon,
			portrait: paigePortrait
		},
		Paradox: {
			icon: paradoxIcon,
			portrait: paradoxPortrait
		},
		Pocket: {
			icon: pocketIcon,
			portrait: pocketPortrait
		},
		Rem: {
			icon: remIcon,
			portrait: remPortrait
		},
		Seven: {
			icon: sevenIcon,
			portrait: sevenPortrait
		},
		Shiv: {
			icon: shivIcon,
			portrait: shivPortrait
		},
		Silver: {
			icon: silverIcon,
			portrait: silverPortrait
		},
		Sinclair: {
			icon: sinclairIcon,
			portrait: sinclairPortrait
		},
		Venator: {
			icon: venatorIcon,
			portrait: venatorPortrait
		},
		Victor: {
			icon: victorIcon,
			portrait: victorPortrait
		},
		Vindicta: {
			icon: vindictaIcon,
			portrait: vindictaPortrait
		},
		Viscous: {
			icon: viscousIcon,
			portrait: viscousPortrait
		},
		Vyper: {
			icon: vyperIcon,
			portrait: vyperPortrait
		},
		Warden: {
			icon: wardenIcon,
			portrait: wardenPortrait
		},
		Wraith: {
			icon: wraithIcon,
			portrait: wraithPortrait
		},
		Yamato: {
			icon: yamatoIcon,
			portrait: yamatoPortrait
		}
	};

	type Props = {
		variant: "icon" | "portrait";
		hero: HeroName;
	};

	const { variant, hero }: Props = $props();
	const src = $derived(variant === "icon" ? heroImages[hero].icon : heroImages[hero].portrait);
</script>

<img {src} alt={hero} />
