# lun

$lun is a particle that turns words into a verb meaning "to \<word\>-ify X" or "to make X into \<word\>".

Now, importantly, whether the word is interpreted as a modifier or a noun is important to the meaning. For example, if in $lun $tope, $tope is intepreted as a noun, then $lun $tope would mean "to make into goodness", *not* "to make good". Simiarly, if in $lun $nin, $nin is intepreted as a modifier, then $lun $nin wouldn't mean "to make into a person", it would mean "to make similar to a person".

One is making the object *like* the word, whereas the other is making the object *be* the word. Whether $lun is using its modifier meaning or its noun meaning is dependent on context, and on the argument it's taking in.

If a noun is passed as the argument for $lun, so for example, $lun $nin, the default lean is that $lun is using its *noun meaning*. This would mean that defaultly, $lun $nin means "to make into a person", *not* "to make similar to a person".

The same goes for modifiers. Defaulty, $lun $tope means "to make good", *not* "to make into goodness".

However, this is dependent on context, and can be specified if you want to mean something that is not $lun's default lean.

To specify that you're using $lun's *noun meaning*, you can add $wen before the argument. So to specify that you're trying to mean "to make into goodness", you could say $lun **$wen** $tope.

Simiarly, to specify that you're using $lun's *modifier meaning*, you can add $wi before the argument. So to specify that you're trying to mean "to make similar to a person", you could say $lun **$wi** nin.

#### Word Grouping

<blah blah blah talk about how lun groups words based on context, and how you can specify what words about being grouped, and that you can specify that certain words are acting as adverbs>

And lastly, it should be noted that this verb, isn't really grammatically a verb. It makes more sense to think of it as a verb, however it cannot be used when not in front of $le or $o. For example, the sentence $lun $tope $le $tope would be ungrammatical.

#### Examples

<add more examples plsplsplsplspls>

$ja $le $pon $ta $mi $le $makan $in $kuwosi - "They caused me to eat fruit"

$ja $le $pon $ta $mi $le **lun** $panli $in $kuwosi - "They caused me to split the fruit"

Only links to the **one** content word after it, so adverbs can still follow:

$tu $le **lun** $konpa $wiki $in $tipa - "You quickly shake the container"
