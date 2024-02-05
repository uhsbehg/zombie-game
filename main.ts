player.onChat("!start", function () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    music.playSound(Sound.Fuse)
    player.execute(
    "/title @a title §2game starting in..."
    )
    player.execute(
    "/title @a subtitle §q3"
    )
    music.playNote(370, Instrument.Pling, music.beat(BeatFraction.Whole))
    player.execute(
    "/title @a title §2game starting in..."
    )
    player.execute(
    "/title @a subtitle §e2"
    )
    music.playNote(370, Instrument.Pling, music.beat(BeatFraction.Whole))
    player.execute(
    "/title @a title §2game starting in..."
    )
    player.execute(
    "/title @a subtitle §41"
    )
    music.playNote(370, Instrument.Pling, music.beat(BeatFraction.Whole))
    player.execute(
    "/title @a title §qSTART!"
    )
    music.playSound(Sound.LevelUp)
    mobs.applyEffect(HEALTH_BOOST, mobs.target(ALL_PLAYERS), 600, 255)
    mobs.applyEffect(REGENERATION, mobs.target(ALL_PLAYERS), 600, 255)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    mobs.spawn(mobs.monster(ZOMBIE), world(-6, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-8, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-11, 0, 17))
    mobs.spawn(mobs.monster(ZOMBIE), world(-13, 0, 17))
    loops.pause(10000)
    music.playNote(740, Instrument.Pling, music.beat(BeatFraction.Whole))
    music.playNote(740, Instrument.Pling, music.beat(BeatFraction.Whole))
    music.playNote(740, Instrument.Pling, music.beat(BeatFraction.Whole))
    player.execute(
    "/title @a title §qGAME COMPLETE!"
    )
    music.playSound(Sound.Totem)
    mobs.spawnParticle(SPARKLER, pos(0, 0, 0))
    mobs.spawnParticle(ENCHANTING_TABLE, pos(0, 0, 0))
})
player.onChat("!load", function () {
    blocks.loadStructure(
    "build",
    pos(0, 0, 0)
    )
})
player.onItemInteracted(NETHERITE_SWORD, function () {
    mobs.spawnParticle(ENCHANTING_TABLE, pos(0, 0, 0))
})
player.onChat("save", function () {
    blocks.saveStructure(
    "build",
    world(-55, -1, -40),
    world(-41, 11, -23)
    )
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    gameplay.xp(5, mobs.target(ALL_PLAYERS))
    player.execute(
    "/title @a actionbar §q+5 §3XP"
    )
    music.playNote(622, Instrument.Bit)
})
player.onChat("!stop", function () {
    music.stopSounds()
    mobs.kill(
    mobs.target(ALL_ENTITIES)
    )
})
player.execute(
"/title @a title §2type !load then !start"
)
