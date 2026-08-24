export type HeroName =
	| "None"
	| "Abrams"
	| "Apollo"
	| "Bebop"
	| "Billy"
	| "Calico"
	| "Celeste"
	| "Doorman"
	| "Drifter"
	| "Dynamo"
	| "Graves"
	| "Grey Talon"
	| "Haze"
	| "Holliday"
	| "Infernus"
	| "Ivy"
	| "Kelvin"
	| "Lady Geist"
	| "Lash"
	| "McGinnis"
	| "Mina"
	| "Mirage"
	| "Mo & Krill"
	| "Paige"
	| "Paradox"
	| "Pocket"
	| "Rem"
	| "Seven"
	| "Shiv"
	| "Silver"
	| "Sinclair"
	| "Venator"
	| "Victor"
	| "Vindicta"
	| "Viscous"
	| "Vyper"
	| "Warden"
	| "Wraith"
	| "Yamato";

export type ItemName =
	| "Monster Rounds"
	| "Toxic Bullets"
	| "Ricochet"
	| "Crippling Headshot"
	| "Rebuttal"
	| "Debuff Reducer"
	| "Healbane"
	| "Reactive Barrier"
	| "Return Fire"
	| "Counterspell"
	| "Dispel Magic"
	| "Metal Skin"
	| "Divine Barrier"
	| "Indomitable"
	| "Inhibitor"
	| "Juggernaut"
	| "Phantom Strike"
	| "Plated Armor"
	| "Spellbreaker"
	| "Unstoppable"
	| "Rusted Barrel"
	| "Slowing Hex"
	| "Spirit Sap"
	| "Suppressor"
	| "Decay"
	| "Disarming Hex"
	| "Knockdown"
	| "Silence Wave"
	| "Arctic Blast"
	| "Cursed Relic"
	| "Ethereal Shift"
	| "Focus Lens"
	| "Scourge"
	| "Spirit Burn";

export const itemNames: ItemName[] = [
	"Monster Rounds",
	"Toxic Bullets",
	"Ricochet",
	"Crippling Headshot",
	"Rebuttal",
	"Debuff Reducer",
	"Healbane",
	"Reactive Barrier",
	"Return Fire",
	"Counterspell",
	"Dispel Magic",
	"Metal Skin",
	"Divine Barrier",
	"Indomitable",
	"Inhibitor",
	"Juggernaut",
	"Phantom Strike",
	"Plated Armor",
	"Spellbreaker",
	"Unstoppable",
	"Rusted Barrel",
	"Slowing Hex",
	"Spirit Sap",
	"Suppressor",
	"Decay",
	"Disarming Hex",
	"Knockdown",
	"Silence Wave",
	"Arctic Blast",
	"Cursed Relic",
	"Ethereal Shift",
	"Focus Lens",
	"Scourge",
	"Spirit Burn"
];

export type Counter = { counter: ItemName; reason: string; important?: true };

export const heroCounters: Record<HeroName, Array<Counter>> = {
	None: [],
	Abrams: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Abrams' healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Abrams' healing and resists.",
			important: true
		},
		{
			counter: "Rebuttal",
			reason: "Allows easier punishing of melee attacks and grants melee resist.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Shortens the duration of Abrams' charge and ult stuns."
		},
		{
			counter: "Healbane",
			reason: "Reduces Abrams' healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Abrams stuns you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Abrams' charge and ult.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Abrams' ult stun / charge grab and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Abrams' healing and damage.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Abrams' charge and ult stuns.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Abrams' charge, ult and movement items.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Abrams' healing and decays his health.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Abrams' charge and ult.",
			important: true
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Abram's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Abrams' healing.",
			important: true
		}
	],
	Apollo: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Apollo's healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Apollo's healing and resists."
		},
		{
			counter: "Rebuttal",
			reason: "Allows easier punishing of melee attacks and grants melee resist."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Apollo's slow and stun."
		},
		{
			counter: "Healbane",
			reason: "Reduces Apollo's healing."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Apollo stuns or ults you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Apollo's ult.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Apollo's ult effect while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Apollo's riposte stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Apollo's healing and damage."
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Apollo's mobility and disarms him."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Apollo's burst spirit damage while granting debuff resist.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Apollo's riposte stun and his ult's time slow."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Apollo's sigil, flawless advance, ult and movement items.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Apollo's ult.",
			important: true
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Apollo's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Apollo's healing."
		}
	],
	Bebop: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Bebop's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reducs Bebop's healing and resists.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Bebop's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Bebop hooks you.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Bebop's damage back at him."
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Bebop's bomb explosions.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Unsticks Bebop's bombs from you.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Bebop's gun damage."
		},
		{
			counter: "Divine Barrier",
			reason: "Unsticks Bebop's bombs from you while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Bebop's hook and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Bebop's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Bebop's fire rate and grants a resist to his slows."
		},
		{
			counter: "Phantom Strike",
			reason: "Brings Bebop onto the ground when he's ulting and disarms him."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Bebop's bomb damage.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Bebop's hook and uppercut's displacement.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Bebop's fire rate."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Bebop's fire rate."
		},
		{
			counter: "Decay",
			reason: "Reduces Bebop's healing and decays his health.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Bebop."
		},
		{
			counter: "Knockdown",
			reason: "Cancels Bebop's ult."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Bebop's bomb explosions.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Bebop's healing.",
			important: true
		}
	],
	Billy: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Billy's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Billy's healing and resists.",
			important: true
		},
		{
			counter: "Rebuttal",
			reason: "Allows easier punishing of melee attacks and grants melee resist.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Billy's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Billy pulls you with his bashdown or ult.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Billy's ult.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Billy's bashdown drag or ult pull and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Billy's healing and damage.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Billy's extra damage when you are wrecked.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Billy's bashdown drag and ult pull.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Billy's charge and movement items.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Billy's healing and decays his health.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Billy's ult pull.",
			important: true
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Billy's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Billy's healing.",
			important: true
		}
	],
	Calico: [
		{
			counter: "Slowing Hex",
			reason: "Disables Calico's slash, cat transformation, ult and movement items.",
			important: true
		},
		{
			counter: "Silence Wave",
			reason: "Disables Calico's cat transformation and ult hindering her survivability."
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Calico's mobility."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Calico's ability combos."
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Calico hindering her survivability."
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Calico's health."
		}
	],
	Celeste: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Celeste's healing and decays her health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Celeste's healing and resists.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Celeste's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Celeste's shield silences you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Celeste's light eater debuff."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Celeste's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Celeste's fire rate and grants a resist to her ult's slow.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Celeste's mobility and disarms her.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces damage taken from Celeste's weapon and light eater's debuff.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Celeste's fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Hinders Celeste's mobility and disables her movement items."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Celeste's fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Celeste's healing and decays her health."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Celeste.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Celeste's mobility and stuns her.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Celeste's mobility.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Celeste's ult."
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Celeste's healing.",
			important: true
		}
	],
	Doorman: [
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Doorman uses his cart or ult on you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Doorman's cart and his ult entirely or the damage portion of it."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Doorman's cart."
		},
		{
			counter: "Indomitable",
			reason: "Negates Doorman's cart or ult and grants you a barrier.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Doorman's bell and ult damage."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Doorman's cart and ult.",
			important: true
		},
		{
			counter: "Silence Wave",
			reason: "Silences Doorman hindering his survivability."
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Doorman's buffs including Cheat Death.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Doorman's ult damage."
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Doorman hindering his survivability."
		}
	],
	Drifter: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Drifter's silence, mark and ult."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Drifter silences you.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Drifter's damage back at him."
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Drifter's ult.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Drifter's silence and mark.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Drifter's gun damage.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Drifter's silence, mark and ult while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Drifter's silence and grants you a barrier.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Drifter's fire rate and rend's damage.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Drifter's rend damage while granting debuff resist."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Drifter's fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Drifter's teleport and movement items."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Drifter's fire rate.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Drifter.",
			important: true
		}
	],
	Dynamo: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Dynamo's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Dynamo's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Dynamo's stomp displacement, slow and ult.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Dynamo's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Dynamo ults you.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Dynamo's healing and damage.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Dynamo's stomp damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Dynamo's stomp displacement, slow and ult.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Dynamo's teleport and movement items."
		},
		{
			counter: "Decay",
			reason: "Reduces Dynamo's healing and decays his health.",
			important: true
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Dynamo's buffs and cancels his ult.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Dynamo's healing.",
			important: true
		}
	],
	Graves: [
		{
			counter: "Monster Rounds",
			reason: "Nerfs Graves' summons.",
			important: true
		},
		{
			counter: "Ricochet",
			reason: "Helps with killing Graves' summons.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces Graves' slows and immobilize duration."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a Barrier whenever Graves immobilizes you."
		},
		{
			counter: "Return Fire",
			reason: "Deflects Graves' damage back at her and her summons."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Graves' immobilize.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Graves' immobilize and grants you a barrier."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Graves' fire rate and grants a resist to her slows."
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Graves' theft passive build-up.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Graves' immobilize and slows."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Graves' fire rate."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Graves' fire rate."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Graves."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading damage when immobilized by Graves."
		}
	],
	"Grey Talon": [
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Grey Talon curses or ults you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Grey Talon's ult.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Grey Talon's curse."
		},
		{
			counter: "Indomitable",
			reason: "Negates Grey Talon's curse or ult stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Grey Talon's mobility and disarms him.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Grey Talon's charged shot and ult damage while granting debuff resist.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Grey Talon's curse and ult stun."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Grey Talon's flight and movement items."
		},
		{
			counter: "Knockdown",
			reason: "Hinders Grey Talon's mobility and stuns him.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Grey Talon's mobility."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Grey Talon's ult.",
			important: true
		}
	],
	Haze: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Haze's sleep, slows and other debuffs."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Haze puts you to sleep.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Haze's damage back at her."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Haze's fixation stacks and slows.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Haze's gun damage.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Haze's sleep and grants you a barrier.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Haze's fire rate and grants a resist to her slows.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Haze's weapon damage and fixation's build-up.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Haze's sleep and slows.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Haze's fire rate."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Haze's fire rate.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Haze."
		},
		{
			counter: "Silence Wave",
			reason: "Silences Haze hindering her survivability."
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Haze's buffs and cancels her ult.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows avoiding Haze's ult.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Haze hindering her survivability."
		}
	],
	Holliday: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Holliday's burn, displacement, stun, slow and ult."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Holliday stuns or ults you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Holliday's ult.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Holliday's burn."
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Holliday's burn while granting you a barrier."
		},
		{
			counter: "Indomitable",
			reason: "Negates Holliday's stun or ult and grants you a barrier.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Holliday's mobility and disarms her.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Holliday's displacement, stun, slow, ult.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Holliday's bounce pads and movement items.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Holliday's mobility and stuns her.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Holliday's mobility."
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Holliday's buffs and cancels her ult."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Holliday's ult and burn damage.",
			important: true
		}
	],
	Infernus: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Infernus' healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Infernus' healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason:
				"Reduces the duration of Infernus' napalm, burn, afterburn's spirit decrease and stun.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Infernus' healing."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Infernus ults you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Infernus' ult.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Infernus' napalm and burn.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Infernus' napalm and burn while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Infernus' ult stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Infernus' healing and damage."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Infernus' fire rate and grants a resist to his slow.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Infernus' mobility and disarms him.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Infernus' weapon damage and afterburn's build-up.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Infernus' napalm slow and his ult's stun."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Infernus' fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Infernus' dash and movement items.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Infernus' fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Infernus' healing and decays his health."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Infernus.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Infernus' ult and lingering burn.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Infernus' healing."
		}
	],
	Ivy: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Ivy's healing and decays her health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Ivy's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Ivy's slows, immobilize, stun and silence."
		},
		{
			counter: "Healbane",
			reason: "Reduces Ivy's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Ivy immobilizes, stuns, or silences you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Ivy's stone form stun.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Ivy's slows, immobilize and silence."
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Ivy's slows, immobilize and silence while granting you a barrier."
		},
		{
			counter: "Indomitable",
			reason: "Negates Ivy's immobilize, stun or silence and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Ivy's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Ivy's fire rate and grants a resist to her slows."
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Ivy's mobility and disarms her.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Ivy's stone form and ult damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Ivy's slows, immobilize, stun and silence.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Ivy's healing and decays her health.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Ivy's mobility and stuns her."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Ivy's stone form.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Ivy's healing.",
			important: true
		}
	],
	Kelvin: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Kelvin's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Kelvin's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Kelvin's slows."
		},
		{
			counter: "Healbane",
			reason: "Reduces Kelvin's healing.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Kelvin's slows and fire rate decrease."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Kelvin's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Kelvin's fire rate and grants a resist to his slows."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Kelvin's slows."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Kelvin's ice path and movement items.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Kelvin's healing and decays his health.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Kelvin's mobility and stuns him.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading damage when trapped inside Kelvin's ult."
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Kelvin's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Kelvin's healing.",
			important: true
		}
	],
	"Lady Geist": [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Lady Geist's healing and decays her health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Lady Geist's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Lady Geist's life drain, malice debuff, slows and silence."
		},
		{
			counter: "Healbane",
			reason: "Reduces Lady Geist's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Lady Geist silences you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Lady Geist's life drain, malice debuff and slows."
		},
		{
			counter: "Divine Barrier",
			reason:
				"Removes Lady Geist's life drain, malice debuff, slows and silence while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Lady Geist's ult silence and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Lady Geist's healing and damage.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Lady Geist's healing and decays her health.",
			important: true
		},
		{
			counter: "Silence Wave",
			reason: "Silences Lady Geist hindering her survivability.",
			important: true
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Lady Geist's buffs and curses her hindering her survivability."
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Lady Geist hindering her survivability.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Lady Geist's healing.",
			important: true
		}
	],
	Lash: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Lash's healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Lash's healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Lash's displacement, stun and slows."
		},
		{
			counter: "Healbane",
			reason: "Reduces Lash's healing."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Lash displaces or stuns you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Lash's ult.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Lash's displacement or stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Lash's healing and damage."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Lash's fire rate and grants a resist to his slows."
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Lash's mobility and disarms him.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Lash's burst spirit damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Lash's stun, displacement and slows.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Lash's fire rate."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Lash's grapple and movement items.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Lash's fire rate."
		},
		{
			counter: "Decay",
			reason: "Reduces Lash's healing and decays his health."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Lash."
		},
		{
			counter: "Knockdown",
			reason: "Hinders Lash's mobility and stuns him.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Lash's mobility.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Lash's ult.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Lash's healing."
		}
	],
	McGinnis: [
		{
			counter: "Monster Rounds",
			reason: "Makes McGinnis' turrets easier to kill.",
			important: true
		},
		{
			counter: "Toxic Bullets",
			reason: "Reduces McGinnis' healing and decays her health.",
			important: true
		},
		{
			counter: "Ricochet",
			reason: "Helps with destroying McGinnis' turrets.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces McGinnis' healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of McGinnis' slows."
		},
		{
			counter: "Healbane",
			reason: "Reduces McGinnis' healing.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces McGinnis' healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces McGinnis' fire rate and grants a resist to her slows.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading McGinnis' ult."
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces McGinnis' healing.",
			important: true
		}
	],
	Mina: [
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Mina ults you.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Mina's fire rate and grants a resist to her love bite slow.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Mina's mobility and disarms her.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces the build-up of Mina's love bites.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Mina's rake and love bite damage."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Mina's silence and slow.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Mina's teleport and movement items.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Mina's mobility and stuns her.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Mina's mobility."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Mina's ult.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Mina hindering her survivability."
		}
	],
	Mirage: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Mirage's healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Mirage's healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Mirage's scarabs, displacement, slow and stun."
		},
		{
			counter: "Healbane",
			reason: "Reduces Mirage's healing."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Mirage displaces or stuns you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Mirage's scarabs, marks and his tornado's slow.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason:
				"Removes Mirage's scarabs, marks and his tornado's slow while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Mirage's tornado's displacement or his mark's stun and grants you a barrier."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Mirage's healing and damage."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Mirage's fire rate and grants you a resist to his slow."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Mirage's mark damage while granting debuff resist.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Mirage's displacement, slow and stun."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Mirage's fire rate."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Mirage's tornado and movement items."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Mirage's fire rate."
		},
		{
			counter: "Decay",
			reason: "Reduces Mirage's healing and decays his health."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Mirage.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Mirage's healing."
		}
	],
	"Mo & Krill": [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Mo & Krill's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Mo & Krill's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason:
				"Reduces the duration of Mo & Krill's scorn debuff, displacement, disarm, slow and ult.",
			important: true
		},
		{
			counter: "Healbane",
			reason: "Reduces Mo & Krill's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Mo & Krill ults you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Mo & Krill's scorn debuff, slow and disarm."
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Mo & Krill's scorn debuff, slow and disarm while granting you a barrier."
		},
		{
			counter: "Indomitable",
			reason: "Negates Mo & Krill's ult and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Mo & Krill's healing and damage.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Mo & Krill's displacement, slow and ult.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Mo & Krill's healing and decays his health.",
			important: true
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Mo & Krill's buffs and cancels his ult.",
			important: true
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Mo & Krill's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Mo & Krill's healing.",
			important: true
		}
	],
	Paige: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Paige's immobilize and stun."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Paige immobilizes or stuns you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Paige's immobilize or ult.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Paige's immobilize.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Paige's immobilize while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Paige's immobilize or stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Paige's immobilize or stun.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Paige's immobilize or ult."
		}
	],
	Paradox: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Paradox's bomb debuff, silence and slows."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Paradox silences or ults you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Paradox's bomb debuff, silence and slows.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Paradox's bomb debuff, silence and slows while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Paradox's silence or ult.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Paradox's fire rate and grants you a resist to her slows."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Paradox's kinetic carbine damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Paradox's silence, slows and ult.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Paradox's bomb damage.",
			important: true
		}
	],
	Pocket: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Pocket's slows, fire rate decrease and ult."
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Pocket's ult.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason:
				"Removes Pocket's slows, fire rate decrease and affliction while granting you a barrier.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Pocket's mobility and disarms him.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Pocket's cloak and suitcase damage while granting debuff resist.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Pocket's fire rate."
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Pocket's teleport and movement items."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Pocket's fire rate."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Pocket."
		},
		{
			counter: "Knockdown",
			reason: "Hinders Pocket's mobility and stuns him."
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Pocket's buffs and curses him hindering his survivability.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Pocket's ult.",
			important: true
		}
	],
	Rem: [
		{
			counter: "Monster Rounds",
			reason: "Nerfs Rem's helper-buffed troopers."
		},
		{
			counter: "Toxic Bullets",
			reason: "Reduces Rem's healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Rem's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Rem's displacement, slow and sleep."
		},
		{
			counter: "Healbane",
			reason: "Reduces Rem's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Rem puts you to sleep.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Rem's ult.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes a teammate's sleep while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Rem's sleep and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Rem's healing and damage."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Rem's pillow damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Rem's displacement, slow and sleep.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Rem's tag along and movement items.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Rem's damage and decays his health."
		},
		{
			counter: "Silence Wave",
			reason: "Silences Rem hindering his survivability.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Rem's ult.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Rem hindering his survivability.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Rem's healing."
		}
	],
	Seven: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Seven's healing and decays his health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Seven's healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Seven's stun, slow and spirit shred."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Seven stuns you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Seven's stun.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Seven's stun, slow and spirit shred.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Seven's stun, slow and spirit shred while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Seven's stun and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Seven's healing and damage."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Seven's fire rate and grants you a resist to his slow.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Seven's power surge damage.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Seven's fire rate.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Seven's fire rate.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Seven taking away his power surge.",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Stuns Seven and cancels his ult.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Seven's stun and ult.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Seven's healing."
		}
	],
	Shiv: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Shiv's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Shiv's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Shiv's knives and spirit shred."
		},
		{
			counter: "Healbane",
			reason: "Reduces Shiv's healing.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Shiv's knives and spirit shred.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Shiv's knives and spirit shred while granting you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Shiv's healing and damage.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Shiv's dash, ult and movement items.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Shiv's healing and decays his health.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Shiv's knife bleed damage."
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Shiv's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Shiv's healing.",
			important: true
		}
	],
	Silver: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Silver's healing and decays her health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Silver's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason:
				"Reduces the duration of Silver's damage decrease, bola, bullet shred, slow and disarm."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Silver kicks you."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Silver's damage decrease, bola, bullet shred, slow and disarm.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Silver's gun damage."
		},
		{
			counter: "Divine Barrier",
			reason:
				"Removes Silver's damage decrease, bola, bullet shred, slow and disarm while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Silver's kick and grants you a barrier."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Silver's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Silver's fire rate and claw attack speed.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Silver's mobility and disarms her.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Silver's kick, bola and slows."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Silver's fire rate and claw attack speed.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Silver's kick, leap and movement items.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Silver's fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Silver's healing and decays her health.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Silver, which also disables her claw attack.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading damage while Silver's ulted."
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Silver's healing.",
			important: true
		}
	],
	Sinclair: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Sinclair's fire rate decrease and hex.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Sinclair hexes you.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Sinclair's hex and various ults.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Sinclair's hex and grants you a barrier.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Lowers Sinclair's bolt damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Sinclair's hex and various ults.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Sinclair's teleport and movement items."
		},
		{
			counter: "Silence Wave",
			reason: "Silences Sinclair hindering his survivability."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Sinclair's hex and various ults.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Sinclair hindering his survivability."
		}
	],
	Venator: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Venator's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Venator's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Venator's grenade burn, stun and trap."
		},
		{
			counter: "Healbane",
			reason: "Reduces Venator's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Venator stuns or traps you.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Venator's damage back at him."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Venator's grenade burn and trap."
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Venator's gun damage and most of his abilities.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Venator's grenade burn and trap while granting you a barrier."
		},
		{
			counter: "Indomitable",
			reason: "Negates Venator's stun or trap and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Venator's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Venator's fire rate and grants you melee resist.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Sometimes negates Venator's non-blessed ult shots.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Venator's stun and trap.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Venator's fire rate.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Venator's fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Venator's healing and decays his health.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Venator, which also temporarily disables his ult.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Venator's healing.",
			important: true
		}
	],
	Victor: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Victor's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Victor's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Victor's slows and stun."
		},
		{
			counter: "Healbane",
			reason: "Reduces Victor's healing.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Victor's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Victor's fire rate and grants you a resist to his slows.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Victor's per-bullet spirit damage when his ult is on cooldown."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Victor's pain battery damage while granting debuff resist."
		},
		{
			counter: "Decay",
			reason: "Reduces Victor's healing and decays his health.",
			important: true
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Victor's buffs and hinders his survivability.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Victor hindering his survivability."
		},
		{
			counter: "Scourge",
			reason: "Grants spirit resist and decays Victor's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Victor's healing.",
			important: true
		}
	],
	Vindicta: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Vindicta's stake and crow debuff."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Vindicta traps you with her stake.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Returns Vindicta's damage back at her.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Vindicta's stake and crow debuff."
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Vindicta's gun damage.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Vindicta's stake and crow debuff while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Vindicta's stake and grants you a barrier.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Vindicta's fire rate and grants you a resist to her stake's slow.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Vindicta's mobility and disarms her.",
			important: true
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Vindicta's assassinate damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Vindicta's stake.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Vindicta's fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Vindicta's flight and movement items.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Vindicta's fire rate.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Vindicta (Her ult isn't affected).",
			important: true
		},
		{
			counter: "Knockdown",
			reason: "Hinders Vindicta's mobility and stuns her.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Vindicta's mobility."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Vindicta's damage while staked."
		}
	],
	Viscous: [
		{
			counter: "Rebuttal",
			reason: "Helps with parrying Viscous' punches.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reducs the duration of Viscous' slows, displacement and ult stun."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Viscous stuns you."
		},
		{
			counter: "Juggernaut",
			reason: "Grants you a resist to Viscous' slows and a resist to his punch damage."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Viscous' splatter damage while granting debuff resist."
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Viscous' slows, displacement and ult stun.",
			important: true
		},
		{
			counter: "Silence Wave",
			reason: "Silences Viscous hindering his survivability."
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Viscous' cube and cancels his ult hindering his survivability.",
			important: true
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Viscous hindering his survivability."
		}
	],
	Vyper: [
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Vyper's slows, bullet shred and petrify."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Vyper petrifies you.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Vyper's damage back at you.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Vyper's dagger debuffs and venom build-up.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Vyper's gun damage.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Vyper's petrify and grants you a barrier.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Vyper's fire rate and grants you a resist to her slows.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Vyper's mobility and disarms her.",
			important: true
		},
		{
			counter: "Plated Armor",
			reason: "Reduces Vyper's venom build-up.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Vyper's slows and petrify."
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Vyper's fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Hinders Vyper's mobility, which also hinders her ammo management."
		},
		{
			counter: "Suppressor",
			reason: "Reduces Vyper's fire rate.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Vyper.",
			important: true
		},
		{
			counter: "Arctic Blast",
			reason: "Hinders Vyper's mobility, which also hinders her ammo management."
		}
	],
	Warden: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Warden's healing and decays his health.",
			important: true
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Warden's healing and resists.",
			important: true
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Warden's flask debuff and immobilize."
		},
		{
			counter: "Healbane",
			reason: "Reduces Warden's healing.",
			important: true
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Warden immobilizes you."
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Warden's immobilize.",
			important: true
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Warden's flask debuff and immobilize.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Warden's gun damage.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Warden's flask debuff and immobilize while granting you a barrier."
		},
		{
			counter: "Indomitable",
			reason: "Negates Warden's immobilize and grants you a barrier."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Warden's healing and damage.",
			important: true
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Warden's fire rate and grants you a resist to his slow.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Warden's slows and immobilize.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Warden's fire rate.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Warden's fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Warden's healing and decays his health.",
			important: true
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Warden.",
			important: true
		},
		{
			counter: "Cursed Relic",
			reason: "Removes Warden's buffs and cancels his ult.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Warden's healing.",
			important: true
		}
	],
	Wraith: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Wraith's healing and decays her health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Wraith's healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Wraith's card and ult debuffs."
		},
		{
			counter: "Healbane",
			reason: "Reduces Wraith's healing."
		},
		{
			counter: "Reactive Barrier",
			reason: "Grants you a barrier whenever Wraith ults you.",
			important: true
		},
		{
			counter: "Return Fire",
			reason: "Deflects Wraith's damage back at her.",
			important: true
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Wraith's ult.",
			important: true
		},
		{
			counter: "Metal Skin",
			reason: "Makes you immune to Wraith's gun damage.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason: "Removes Wraith's ult debuff while granting you a barrier.",
			important: true
		},
		{
			counter: "Indomitable",
			reason: "Negates Wraith's ult and grants you a barrier.",
			important: true
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Wraith's healing and damage."
		},
		{
			counter: "Juggernaut",
			reason: "Reduces Wraith's fire rate and grants you a resist to her slows.",
			important: true
		},
		{
			counter: "Phantom Strike",
			reason: "Hinders Wraith's mobility and disarms her.",
			important: true
		},
		{
			counter: "Unstoppable",
			reason: "Allows negating Wraith's slows and ult.",
			important: true
		},
		{
			counter: "Rusted Barrel",
			reason: "Reduces Wraith's fire rate.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Wraith's teleport and movement items.",
			important: true
		},
		{
			counter: "Suppressor",
			reason: "Reduces Wraith's fire rate.",
			important: true
		},
		{
			counter: "Decay",
			reason: "Reduces Wraith's healing and decays her health."
		},
		{
			counter: "Disarming Hex",
			reason: "Disarms Wraith.",
			important: true
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading damage while Wraith uses full-auto or ults you.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Wraith's healing."
		}
	],
	Yamato: [
		{
			counter: "Toxic Bullets",
			reason: "Reduces Yamato's healing and decays her health."
		},
		{
			counter: "Crippling Headshot",
			reason: "Reduces Yamato's healing and resists."
		},
		{
			counter: "Debuff Reducer",
			reason: "Reduces the duration of Yamato's slows and fire rate decrease."
		},
		{
			counter: "Healbane",
			reason: "Reduces Yamato's healing."
		},
		{
			counter: "Counterspell",
			reason: "Allows negating Yamato's power slash."
		},
		{
			counter: "Dispel Magic",
			reason: "Removes Yamato's slows, fire rate decrease and grapple line.",
			important: true
		},
		{
			counter: "Divine Barrier",
			reason:
				"Removes Yamato's slows, fire rate decrease and grapple line while granting you a barrier."
		},
		{
			counter: "Inhibitor",
			reason: "Reduces Yamato's healing and damage."
		},
		{
			counter: "Spellbreaker",
			reason: "Reduces Yamato's power slash damage while granting debuff resist.",
			important: true
		},
		{
			counter: "Slowing Hex",
			reason: "Disables Yamato's grapple.",
			important: true
		},
		{
			counter: "Spirit Sap",
			reason: "Reduces Yamato's spirit damage while shredding her spirit resist."
		},
		{
			counter: "Decay",
			reason: "Reduces Yamato's healing and decays her health."
		},
		{
			counter: "Silence Wave",
			reason: "Silences Yamato hindering her survivability."
		},
		{
			counter: "Ethereal Shift",
			reason: "Allows evading Yamato's power slash or damage when she's ulted."
		},
		{
			counter: "Focus Lens",
			reason: "Deals damage and silences Yamato hindering her survivability."
		},
		{
			counter: "Scourge",
			reason: "Grants you spirit resist and decays Yamato's health.",
			important: true
		},
		{
			counter: "Spirit Burn",
			reason: "Reduces Yamato's healing."
		}
	]
};
