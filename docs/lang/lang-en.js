"use strict";

// Language support




const lang = {

  regex:{
    //----------------------------------------------------------------------------------------------
    // Regular Expressions for Commands
    
    // Meta commands
    MetaHelp:/^help$|^\?$/,
    MetaHint:/^(?:hint|clue)s?$/,
    MetaCredits:/^(?:about|credits|version|info)$/,
    MetaDarkMode:/^(?:dark|dark mode|toggle dark|toggle dark mode)$/,
    MetaPlainFontMode:/^(?:font|plain font|plain fonts|fonts)$/,
    MetaWarnings:/^warn(?:ing|ings|)$/,
    MetaImages:/^images$/,
    MetaSilent:/^(?:sh|silent)$/,
    MetaSpoken:/^spoken$/,
    MetaIntro:/^intro$/,
    MetaBrief:/^brief$/,
    MetaTerse:/^terse$/,
    MetaVerbose:/^verbose$/,
    MetaTranscript:/^transcript$|^script$/,
    MetaTranscriptStart:/^transcript on$|^script start$/,
    MetaTranscriptOn:/^transcript on$|^script on$/,
    MetaTranscriptOff:/^transcript off$|^script off$/,
    MetaTranscriptClear:/^transcript clear$|^script clear$|^transcript delete$|^script delete$/,
    MetaTranscriptShow:/^transcript show$|^script show$|^show script$|^show transcript$|^showscript$/,
    MetaTranscriptWalkthrough:/^(?:transcript|script) walk$/,
    MetaUserComment:/^(?:\*|\;)(.+)$/,
    MetaSave:/^save$/,
    MetaSaveGame:/^(?:save) (.+)$/,
    MetaSaveOverwriteGame:/^(?:save) (.+) (?:overwrite|ow)$/,
    MetaLoadGame:/^(?:load|reload|restore) (.+)$/,
    MetaDir:/^(?:reload|load|restore|dir|directory|ls|save ls|save dir)$/,
    MetaDeleteGame:/^(?:delete|del) (.+)$/,
    MetaUndo:/^undo$/,
    MetaAgain:/^(?:again|g)$/,
    MetaOops:/^(?:oops)$/,
    MetaRestart:/^restart$/,
    MetaScore:/^score$/,
    MetaPronouns:/^pronouns$/,
    MetaTopicsNote:/^topics?$/,

    // Kind of meta    
    Look:/^l$|^look$/,
    Exits:/^exits$/,
    Map:/^map$/,
    Inv:/^inventory$|^inv$|^i$/,

    // Misc
    Wait:/^wait$|^z$/,
    Smell:/^smell$|^sniff$/,
    Listen:/^listen$/,
    PurchaseFromList:/^buy$|^purchase$/,
    
    // Use item
    Examine:/^(?:examine|exam|ex|x) (.+)$/,
    LookAt:/^(?:look at|look|l) (.+)$/,
    LookOut:/^(?:look out of|look out) (.+)$/,
    LookBehind:/^(?:look behind|check behind) (.+)$/,
    LookUnder:/^(?:look under|check under) (.+)$/,
    LookInside:/^(?:look inside|look in) (.+)$/,
    LookThrough:/^(?:look|peek|peer) (?:down|through) (.+)$/,
    Search:/^(?:search) (.+)$/,
    Take:/^(?:take|get|pick up|pick|t|grab) (.+)$/,
    Drop:/^(?:drop|d|discard) (.+)$/,
    Wear2:/^put (?:my |your |his |her |)(.+) on$/,
    Wear:/^(?:wear|don|put on) (?:my |your |his |her |)(.+)$/,
    Remove:/^(?:remove|doff|take off|unwear) (?:my |your |his |her |)(.+)$/,
    Remove2:/^take (?:my |your |his |her |)(.+) off$/,
    Read:/^(?:read|r) (.+)$/,
    SmellItem:/^(?:smell|sniff) (.+)$/,
    ListenToItem:/^(?:listen to|listen) (.+)$/,
    Purchase:/^(?:purchase|buy) (.+)$/,
    Sell:/^(?:sell) (.+)$/,
    Smash:/^(?:smash|break|destroy|burst|pierce|puncture|bust) (.+)$/,
    Turn:/^(?:turn|rotate|twist) (.+)$/,
    TurnLeft:/^(?:turn|rotate|twist) (.+) (?:left|anticlockwise|anti-clockwise|widdershins)$/,
    TurnRight:/^(?:turn|rotate|twist) (.+) (?:right|clockwise)$/,
    SwitchOn:/^(?:turn on|switch on|active|enable) (.+)$/,
    SwitchOn2:/^(?:turn|switch) (.+) on$/,
    SwitchOff2:/^(?:turn|switch|deactivate|disable) (.+) off$/,
    SwitchOff:/^(?:turn off|switch off) (.+)$/,
    Open:/^(?:open) (.+)$/,
    OpenWith:[
      /^(?:open) (.+) (?:with|using) (.+)$/,
      {regex:/^(?:use|with|using) (.+) (?:to open|open) (.+)$/, mod:{reverse:true}},
    ],
    Close:/^(?:close) (.+)$/,
    Lock:/^(?:lock) (.+)$/,
    Unlock:/^(?:unlock) (.+)$/,
    Push:/^(?:push|press) (.+)$/,
    Pull:/^(?:pull|drag) (.+)$/,
    Fill:/^(?:fill) (.+)$/,
    Empty:/^(?:empty|discharge|decant|pour out|pour) (.+)$/,
    Eat:/^(eat|feed on|feed|partake of|partake|dine on|dine) (.+)$/,
    Drink:/^(drink|imbibe|quaff|guzzle|knock back|swig|swill|sip|down|chug) (.+)$/,
    Ingest:/^(consume|swallow|ingest) (.+)$/,
    Sit:/^(?:sit down|sit)$/,
    Recline:/^(?:recline|lie down|lie)$/,
    SitOn:/^(?:sit on|sit upon|sit) (.+)$/,
    StandOn:/^(?:stand on|stand upon|stand) (.+)$/,
    ReclineOn:/^(?:recline on|recline upon|recline|lie on|lie upon|lie) (.+)$/,
    GetOff:/^(?:get off|off) (.+)$/,
    Use:/^(?:use) (.+)$/,
    TalkTo:/^(?:talk to|talk|speak to|speak|converse with|converse) (.+)$/,
    Topics:/^topics? (?:for )?(.+)$/,

    Make:/^(?:make|build|construct) (.+)$/,
    MakeWith:[
      /^(?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      {regex:/^(?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
    ],
    NpcMake:[
      /^(.+), ?(?:make|build|construct) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:make|build|construct) (.+)$/,
    ],
    NpcMakeWith:[
      /^(.+), ?(?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:make|build|construct) (.+) (?:with|from|using) (.+)$/,
      {regex:/^(.+), ?(?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:tell|ask|instruct) (.+) to (?:with:from|using) (.+) (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(.+), ?(?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
      {regex:/^(?:tell|ask|instruct) (.+) to (?:use) (.+) to (?:make|build|construct) (.+)$/, mod:{reverse:true}},
    ],
    
    GoInItem:/^(?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
    GoOutItem:/^(?:exit|go out|out|outside|go outide|leave) (.+)$/,
    GoUpItem:/^(?:go up|up|climb up|climb|ascend) (.+)$/,
    GoDownItem:/^(?:go down|down|climb down|descend) (.+)$/,
    GoThroughItem:/^(?:go through|walk through) (.+)$/,
    NpcGoInItem:[
      /^(.+), ?(?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:enter|go in|in|inside|go inside|climb in|climb inside|get in|get inside) (.+)$/,
    ],
    NpcGoOutItem:[
      /^(.+), ?(?:exit|go out|out|outside|go outide|leave) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:exit|go out|out|outside|go outide|leave) (.+)$/,
    ],
    NpcGoUpItem:[
      /^(.+), ?(?:go up|up|climb up|climb|ascend) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go up|up|climb up|climb|ascend) (.+)$/,
    ],
    NpcGoDownItem:[
      /^(.+), ?(?:go down|down|climb down|descend) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go down|down|climb down|descend) (.+)$/,
    ],
    NpcGoThroughItem:[
      /^(.+), ?(?:go through|walk through) (.+)$/,
      /^(?:tell|ask|instruct) (.+) to (?:go through|walk through) (.+)$/,
    ],
    
    // Misc again
    Say:/^(say|shout|whisper|holler|scream|yell) (.+)$/,
    Stand:/^stand$|^stand up$|^get up$/,
    NpcStand:[/^(.+), ?(?:stand|stand up|get up)$/, /^(?:tell|ask|instruct) (.+) to (?:stand|stand up|get up)$/],
    GetFluid:/^(?:get|take|scoop|pick|grab)(?:| up) (.+)$/,
    FillWith:/^(?:fill) (.+) (?:with) (.+)$/,
    NpcFillWith:[/^(.+), ?(?:fill) (.+) (?:with) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:fill) (.+) (?:with) (.+)$/],

    EmptyInto:/^(?:empty|pour out|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/,
    NpcEmptyInto:[/^(.+), ?(?:empty|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:empty|pour|discharge) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/],
    EmptyFluidInto:/^(?:empty|pour out|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/,
    NpcEmptyFluidInto:[/^(.+), ?(?:empty|pour|discharge|decant) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:empty|pour|discharge) (.+) (?:into|in to|in|down|onto|on to|on) (.+)$/],
    PutFluidIn:/^(?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/,

    PutIn:/^(?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/,
    NpcPutIn:[/^(.+), ?(?:put|place|drop|insert) (.+) (?:in to|into|in|on to|onto|on) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:put|place|drop) (.+) (?:in to|into|in|on to|onto|on) (.+)$/],
    TakeOut:/^(?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/,
    NpcTakeOut:[/^(.+), ?(?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/, /^(?:tell|ask|instruct) (.+) to (?:take|get|remove) (.+) (?:from|out of|out|off of|off) (.+)$/],
    GiveTo:/^(?:give|offer|proffer) (.+) (?:to) (.+)$/,
    NpcGiveTo:[/^(.+), ?(?:give|offer|proffer) (.+) (?:to) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give|offer|proffer) (.+) (?:to) (.+)$/],
    Give:/^(?:give|offer|proffer) (.+)$/,
    NpcGive:[/^(.+), ?(?:give|offer|proffer) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give|offer|proffer) (.+)$/],
    //NpcGiveToMe:[/^(.+), ?(?:give) me (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:give) me (.+)$/],

    TieUp:/^(?:tie|fasten|attach|connect|hook) (.+)$/,
    TieTo:/^(?:tie|fasten|attach|connect|hook) (.+) (?:to) (.+)$/,
    NpcTieUp:[/^(.+), ?(?:tie|fasten|attach|connect|hook) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:tie|fasten|attach) (.+)$/],
    NpcTieTo:[/^(.+), ?(?:tie|fasten|attach|connect|hook) (.+) (?:to) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:tie|fasten|attach) (.+) (?:to) (.+)$/],
    Untie:/^(?:untie|unfasten|detach|disconnect|unhook) (.+)$/,
    NpcUntie:[/^(.+), ?(?:untie|unfasten|detach|disconnect|unhook) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:untie|unfasten|detach) (.+)$/],
    UntieFrom:/^(?:untie|unfasten|detach) (.+) (?:from) (.+)$/,
    NpcUntieFrom:[/^(.+), ?(?:untie|unfasten|detach) (.+) (?:frm) (.+)$/, /^(?:tell|ask|instruct) (.+) to ?(?:untie|unfasten|detach) (.+) (?:from) (.+)$/],
    UseWith:/^(?:use) (.+) (?:with|on) (.+)$/,


    PushExit:/^(push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
    NpcPushExit:[
      /^(.+), ?(push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
      /^(?:tell|ask|instruct) (.+) to (push|pull|move|shift) (.+) (northwest|nw|north|n|northeast|ne|in|in|enter|i|up|u|west|w|east|e|out|out|exit|o|down|dn|d|southwest|sw|south|s|southeast|se)$/,
    ],
    AskAbout:/^(?:ask) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    TellAbout:/^(?:tell) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    TalkAbout:[
      /^(?:talk to|talk with|talk|speak to|speak with|speak) (.+?) about (what|who|how|why|where|when) (.+)$/,
      /^(?:talk to|talk with|talk|speak to|speak with|speak) (.+?) (about|what|who|how|why|where|when) (.+)$/,
    ],
    FollowMe:[/^(.+), ?(?:follow|follow me)$/, /^(?:tell|ask|instruct) (.+) to (?:follow|follow me)$/],    
    WaitHere:[
      /^(.+), ?(?:stop follow|stop following|stop follow me|stop following me|wait|wait here|stay|stay here)$/,
      /^(?:tell|ask|instruct) (.+) to (?:stop follow|stop following|stop follow me|stop following me|wait|wait here|stay|stay here)$/,
    ],    
    
    //RPG
    Attack:/^(?:attack|att) (.+)$/,
    Search:/^(?:search) (.+)$/,
    Equip:/^(?:equip|brandish|draw) (.+)$/,
    Unequip:/^(?:unequip|holster|sheath|put away) (.+)$/,
    LearnSpell:/^(?:learn) (.+)$/,
    CastSpell:/^(?:cast|invoke) (.+)$/,
    CastSpellAt:/^(?:cast|invoke) (.+) (?:at|on) (.+)$/,
    
    
    //Debug
    DebugWalkThrough:/^wt (.+)$/,
    DebugInspect:/^inspect (.+)$/,
    DebugInspectByName:/^inspect2 (.+)$/,
    DebugTest:/^test$/,
    DebugInspectCommand:/^(?:cmd) (.+)$/,
    DebugListCommands:/^cmds$/,
    DebugListCommands2:/^cmds2$/,
    DebugParserToggle:/^parser$/,
    DebugStats:/^stats?$/,
    DebugHighlight:/^highlight$/,
  },

  // This will be added to the start of the regex of a command to make an NPC command
  // The saved capture group is the NPC's name
  tell_to_prefixes:{
    1:'(?:tell|ask|instruct) (.+) to ',   // TELL KYLE TO GET SPOON
    2:'(.+), ?',                 // KYLE, GET SPOON
  },



  //----------------------------------------------------------------------------------------------
  // Standard Responses



  // TAKEABLE
  take_successful:"{nv:char:take:true} {nm:item:the}{ifIs:params:excess:true:, that is all there is}.",
  take_successful_counted:"{nv:char:take:true} {number:count} {nm:item}.",
  drop_successful:"{nv:char:drop:true} {nm:item:the}{ifIs:params:excess:true:, that is all {nv:char:have}}.",
  drop_successful_counted:"{nv:char:drop:true} {number:count} {nm:item}.",
  cannot_take:"{multi}{pv:char:can't:true} take {ob:item}.",
  cannot_drop:"{multi}{pv:char:can't:true} drop {ob:item}.",
  not_carrying:"{multi}{pv:char:don't:true} have {if:item:countable:any:{ob:item}}.",
  already_have:"{multi}{pv:char:'ve:true} got {ob:item} already.",
  cannot_take_component:"{multi}{pv:char:can't:true} take {ob:item}; {pv:item:be} part of {nm:whole:the}.",


  // EDIBLE
  eat_successful:"{nv:char:eat:true} {nm:item:the}.",
  drink_successful:"{nv:char:drink:true} {nm:item:the}.",
  cannot_eat:"{nv:item:be:true} not something {nv:char:can} eat.",
  cannot_drink:"{nv:item:be:true} not something {nv:char:can} drink.",
  //cannot_ingest:"{nv:item:be:true} not something {nv:char:can} ingest.",


  // WEARABLE
  wear_successful:"{nv:char:put:true} on {nm:item:the}.",
  remove_successful:"{nv:char:take:true} {nm:item:the} off.",
  cannot_wear:"{multi}{nv:char:can't:true} wear {ob:item}.",
  cannot_wear_ensemble:"{multi}Individual parts of an ensemble must be worn and removed separately.",
  not_wearing:"{multi}{nv:char:be:true} not wearing {ob:item}.",
  cannot_wear_over:"{nv:char:can't:true} put {nm:item:the} on over {pa:char} {nm:outer}.",
  cannot_remove_under:"{nv:char:can't:true} take off {pa:char} {nm:item} whilst wearing {pa:char} {nm:outer}.",
  already_wearing:"{multi}{nv:char:be:true} already wearing {ob:item}.",
  invWearingPrefix:"wearing",
  invHoldingPrefix:"holding",


  // CONTAINER, etc.
  open_successful:"{nv:char:open:true} {nm:container:the}.",
  close_successful:"{nv:char:close:true} {nm:container:the}.",
  lock_successful:"{nv:char:lock:true} {nm:container:the}.",
  unlock_successful:"{nv:char:unlock:true} {nm:container:the}.",
  close_and_lock_successful:"{nv:char:close:true} {nm:container:the} and {cj:char:lock} {sb:container}.",
  cannot_open:"{nv:item:can't:true} be opened.",
  cannot_open_with:"{nv:item:can't:true} be opened with that.",
  cannot_close:"{nv:item:can't:true} be closed.",
  cannot_lock:"{nv:char:can't:true} lock {ob:item}.",
  cannot_unlock:"{nv:char:can't:true} unlock {ob:item}.",
  not_container:"{nv:container:be:true} not a container.",
  not_container_not_vessel:"{nv:container:be:true} not a container. It is a vessel, they are different, alright?",
  container_recursion:"What? {nv:char:want:true} to put {nm:item:the} in {nm:container:the} when {nm:container:the} is already in {nm:item:the}? That's just too freaky for me.",
  not_inside:"{nv:item:be:true} not inside that.",
  locked:"{nv:container:be:true} locked.",
  no_key:"{nv:char:do:true} have the right key.",
  locked_exit:"That way is locked.",
  open_and_enter:"{nv:char:open:true} the {show:doorName} and walk through.",
  unlock_and_enter:"{nv:char:unlock:true} the {show:doorName}, open it and walk through.",
  try_but_locked:"{nv:char:try:true} the {show:doorName}, but it is locked.",
  container_closed:"{nv:container:be:true} closed.",
  inside_container:"{nv:item:be:true} inside {nm:container:the}.",
  look_inside:"Inside {nm:container:the} {nv:char:can} see {show:list}.",
  look_inside_it:"Inside {sb:container} {nv:char:can} see {show:list}.",
  
  
  // MECHANDISE
  purchase_successful:"{nv:char:buy:true} {nm:item:the} for {money:money}.",
  sell_successful:"{nv:char:sell:true} {nm:item:the} for {money:money}.",
  cannot_purchase_again:"{nv:char:can't:true} buy {nm:item:the} here - probably because {pv:char:be} already holding {ob:item}.",
  cannot_purchase_here:"{nv:char:can't:true} buy {nm:item:the} here.",
  cannot_afford:"{nv:char:can't:true} afford {nm:item:the} (need {money:money}).",
  cannot_sell_here:"{nv:char:can't:true} sell {nm:item:the} here.",


  // FURNITURE
  sit_on_successful:"{nv:char:sit:true} on {nm:item:the}.",
  stand_on_successful:"{nv:char:stand:true} on {nm:item:the}.",
  recline_on_successful:"{nv:char:lie:true} down on {nm:item:the}.",
  cannot_stand_on:"{nv:item:be:true} not something {nv:char:can} stand on.",
  cannot_sit_on:"{nv:item:be:true} not something {nv:char:can} sit on.",
  cannot_recline_on:"{nv:item:be:true} not something {nv:char:can} lie on.",
  no_sit_object:"There is nothing to sit on here.",
  no_recline_object:"There is nothing to lie down on here.",


  // SWITCHABLE
  switch_on_successful:"{nv:char:switch:true} {nm:item:the} on.",
  switch_off_successful:"{nv:char:switch:true} {nm:item:the} off.",
  cannot_switch_on:"{nv:char:can't:true} turn {ob:item} on.",
  cannot_switch_off:"{nv:char:can't:true} turn {ob:item} off.",


  // VESSEL
  fill_successful:"{nv:char:fill:true} {nm:item:the}.",
  empty_into_successful:"{nv:char:empty:true} {nm:source:the} into {nm:item:the}.",
  empty_onto_successful:"{nv:char:empty:true} {nm:source:the} over {nm:item:the}, and then watch it all run down on to the ground.",
  empty_successful:"{nv:char:empty:true} {nm:source:the} onto the ground, and it soaks away.",
  already_empty:"{nv:source:be:true} already empty.",
  cannot_fill:"{nv:item:be:true} not something {nv:char:can} fill.",
  cannot_mix:"{nv:item:be:true} not something {nv:char:can} mix liquids in.",
  not_vessel:"{pv:item:be:true} not a vessel.",
  not_sink:"Trying to put a liquid (or similar substance) in {nm:item:the} is just going to cause a mess.",
  not_source:"{pv:source:be:true} not something {nv:char:can} get a liquid (or similar substance) out of.",
  cannot_get_fluid:"{nv:char:try:true} to scoop up {show:fluid} but it all slips through {pa:char} fingers. Perhaps {pv:char:need} some kind of vessel.",
  no_fluid_here:"There's no {show:fluid} here.",
  no_fluid_here_at_all:"There's nothing to fill anything with here.",
  not_a_fluid_here:"I don't know of a liquid (or similar substance) called {show:text}.",
  already_full:"{pv:item:be:true} already full of {show:fluid}.",
  pour_into_self:"It is not possible to pour from a vessel into the same vessel!",
  no_generic_fluid_here:"There's nothing to fill {sb:item} with here.",
  not_carrying_fluid:"{nv:char:be:true} not carrying anything with {show:fluid} in it.",

  // VESSEL (but source is referred to as "item" as it is caught by the general item handling)
  cannot_empty:"{nv:item:be:true} not something {nv:char:can} empty.",



  // CONSTRUCTION
  component_wrong:"{nv:char:cannot:true} make {nm:item:a} from {nm:wrong:a}.",
  component_missing:"{nv:char:need:true} {nm:missing:a} to build {nm:item:a}.",
  construction_done:"{nv:char:build:true} {nm:item:a} from {show:list}.",
  construction_already:"{nm:item:the:true} has already been made.",
  

  // NPC
  not_npc:"{nv:char:can:true} tell {nm:item:the} to do anything {pv:char:like}, but there is no way {pv:item:'ll} do it.",
  not_npc_for_give:"Realistically, {nv:item:be} not interested in anything {sb:char} might give {ob:item}.",
  not_interested_for_give:"{nv:npc:be:true} not interested in {nm:item:the}.",
  cannot_follow:"'Follow me,' {nv:char:say} to {nm:npc:the}. Being an inanimate object, {nv:char:be} not too optimistic it will do as it is told.",
  cannot_wait:"'Wait here,' {nv:char:say} to {nm:item:the}. Being an inanimate object, {nv:char:feel} pretty confident it will do as it is told.",
  already_following:"'I'm already following you!'",
  already_waiting:"'I'm already waiting!'",

  cannot_ask_about:"{nv:char:can:true} ask {ob:item} about {show:text} all {pv:char:like}, but {pv:item:be} not about to reply.",
  cannot_tell_about:"{nv:char:can:true} tell {ob:item} about {show:text} all {pv:char:like}, but {pv:item:be} not interested.",
  cannot_talk_about:"{nv:char:can:true} talk to {ob:item} about {show:text} all {pv:char:like}, but {pv:item:be} not interested.",
  topics_no_ask_tell:"This character has no ASK/ABOUT or TELL/ABOUT options set up.",
  topics_none_found:"No suggestions for what to ask or tell {nm:item:the} available.",
  topics_ask_list:"Some suggestions for what to ask {nm:item:the} about: {show:list}.",
  topics_tell_list:"Some suggestions for what to tell {nm:item:the} about: {show:list}.",
  cannot_talk_to:"{nv:char:chat:true} to {nm:item:the} for a few moments, before releasing that {pv:item:be} not about to reply.",
  no_topics:"{nv:char:have:true} nothing to talk to {nm:item:the} about.",
  not_able_to_hear:"Doubtful {nv:item:will} be interested in anything {sb:char} has to say.",
  npc_no_interest_in:"{nv:char:have:true} no interest in that subject.",


  // BUTTON
  press_button_successful:"{nv:char:push:true} {nm:item:the}.",

  // SHIFTABLE
  push_exit_successful:"{nv:char:push:true} {nm:item:the} {show:dir}.",
  cannot_push:"{pv:item:be:true} not something {nv:char:can} move around like that.",
  cannot_push_up:"{pv:char:be:true} not getting {nm:item:the} up there!",
  take_not_push:"Just pick the thing up already!",


  // ROPE
  rope_examine_attached_both_ends:" It is {item.attachedVerb} to both {nm:obj1:the} and {nm:obj2:the}.",
  rope_examine_attached_one_end:" It is {item.attachedVerb} to {nm:obj1:the}.",
  rope_attach_verb:'tie',
  rope_attached_verb:'tied',
  rope_detach_verb:'untie',
  rope_one_end:'One end',
  rope_other_end:'The other end',
  rope_examine_end_attached:'is {item.attachedVerb} to {nm:obj:the}.',
  rope_examine_end_held:'is held by {nm:holder:the}.',
  rope_examine_end_headed:'heads into {nm:loc:the}.',
  rope_no_attachable_here:"There is nothing here {nv:char:can} attach {nm:item:the} to.",
  rope_not_attachable_to:"That is not something {nv:char:can} attach {nm:item:the} to.",
  rope_not_detachable:"{nv:char:cannot:true} attach that to - or detach it from - anything.",
  rope_tied_both_ends_already:"{pv:item:be:true} already attached to {nm:obj1:the} and {nm:obj12:the}.",
  rope_not_attachable:"{nv:char:cannot:true} attach that to anything.",
  rope_not_attached:"{nv:item:be:true} not {item.attachedVerb} to anything.",
  rope_detach_end_ambig:"Which end of {nm:item:the} do you want to detach?",
  rope_not_attached_to:"{nv:item:be:true} not attached to {nm:obj:the}.",
  rope_tethered:"{nv:char:can:true} not detach {nm:item:the} from {nm:obj:the}.",
  rope_attach_success:"{nv:char:attach:true} {nm:item:the} to {nm:obj:the}.",
  rope_detach_success:"{nv:char:detach:true} {nm:item:the} from {nm:obj:the}.",
  rope_cannot_move:"{nv:item:be:true} not long enough, {nv:char:cannot} go any further.",
  rope_wind:"{nv:char:wind:true} in {nm:item:the}.",
  rope_unwind:"{nv:item:unwind:true} behind {nm:char:the}.",
  rope_tied_both_end:"It is tied to something.",
  rope_tied_one_end:"It is tied up at this end.",
  rope_no_end:"{nv:char:cannot:true} see either end of {nm:item:the}.",


  // TRANSIT
  transit_already_here:"{nv:char:press:true} the button; nothing happens.",
  transit_go_to_dest:"{nv:char:press:true} the button; the door closes...",

  // Movement
  go_successful:"",
  not_that_way:"{nv:char:can't:true} go {show:dir}.",
  can_go:"{nv:char:think:true} {pv:char:can} go {exits}.",
  cannot_go_in:"{pv:item:be:true} not something {nv:char:can} get inside.",
  cannot_go_out:"{pv:item:be:true} not something from which {nv:char:can} go out.",
  cannot_go_up:"{pv:item:be:true} not something {nv:char:can} go up.",
  cannot_go_down:"{pv:item:be:true} not something {nv:char:can} go down.",
  cannot_go_through:"{pv:item:be:true} not something {nv:char:can} get through.",


  // General cannot Messages
  cannot_read:"Nothing worth reading there.",
  cannot_use:"No obvious way to use {ob:item}.",
  cannot_smash:"{nv:item:be:true} not something {nv:char:can} break.",
  cannot_turn:"{nv:item:be:true} not something {nv:char:can} turn.",
  cannot_look_out:"Not something {nv:char:can} look out of.",
  cannot_smell:"{nv:item:have:true} no smell.",
  cannot_listen:"{nv:item:be:true} not making any noise.",


  // General command messages
  not_known_msg:"Oopsie woopsie! You tried to perform an action that we didn't expect you to do!",
  disambig_msg:"You seem to be on the right track. Either the command is incomplete or the action shouldn't be performed yet.",
  no_multiples_msg:"You cannot use multiple objects with that command.",
  nothing_msg:"Nothing there to do that with.",
  general_obj_error:"So I kind of get what you want to do, but not what you want to do it with.",
  done_msg:"{multi}Done.",
  nothing_for_sale:"Nothing for sale here.",
  wait_msg:"Time passes...",
  no_map:"Sorry, no map available.",
  inventory_prefix:"{nv:char:be:true} carrying",
  no_receiver:"There's no one here to give things to.",


  // General command fails
  no_smell:"{pv:char:can't:true} smell anything here.",
  no_listen:"{pv:char:can't:true} hear anything of note here.",
  nothing_there:"{nv:char:be:true} sure there's nothing there.",
  nothing_inside:"There's nothing to see inside.",
  it_is_empty:"{pv:container:be:true} empty.",
  not_here:"{pv:item:be:true} not here.",
  char_has_it:"{multi}{nv:holder:have:true} {ob:item}.",
  none_here:"There's no {nm:item} here.",
  none_held:"{nv:char:have:true} no {nm:item}.",
  //none_here_countable:"There's no {nm:item} here.",
  //none_held_countable:"{nv:char:have:true} no {nm:item}.",
  nothing_useful:"That's not going to do anything useful.",
  already:"{sb:item:true} already {cj:item:be}.",
  default_examine:"{pv:item:be:true} just your typical, every day {nm:item}.",
  not_enough:"There {ifMoreThan:count:1:are:is} only {show:count} {nm:item}.",
  
  error:"Oh dear, I seem to have hit an error trying to handle that (F12 for more details).",
  
  
  // Purely for RPGs
  
  attacking:"{nv:attacker:attack:true} {nm:target:the}.",
  primarySuccess:"A hit!",
  primaryFailure:"A miss!",
  noTarget:'No target found for attack',
  equip:"{nv:char:draw:true} {nm:item:the}.",
  unequip:"{nv:char:put:true} away {nm:item:the}.",
  unequipAndEquip:"{nv:char:put:true} away {show:list}, and equip {nm:item:the}.",
  castSpell:"{nv:attacker:cast:true} the {i:{nm:skill}} spell.",
  castSpellFrom:"{nv:attacker:cast:true} the {i:{nm:skill}} spell from {nm:source:the}.",
  drinkPotion:"{nv:attacker:drink:true} {nm:source:the}, casting the {i:{nm:skill}} spell.",
  defaultEffectExpires:"The {i:{show:effect:alias}} effect on {nm:target:the} expires.",
  damageReport:"The attack does {show:modifiedDamage} hits, {nms:target:the} health is now {show:target:health}.",

  communeWithAnimalSpell:'Commune with animal',
  cannotTalkToBeast:"{nv:char:spend:true} a few minutes telling {nm:item:the} about {pa:char} life, but {pv:item:do} not seem interested. Possibly because {pv:item:be} just a dumb beast.",
  teleport:"{nv:attacker:feel:true} disorientated and the world around {sb:attacker} dissolves. A moment later, {nv:attacker:be} somewhere else.",
  summoning_successful:"{nv:item:appear:true} before {nm:attacker:the}.",
  
  deadAddendum:' {pv:item:be:true} dead.',
  asleepAddendum:' {pv:item:be:true} sleeping.',
  injuredAddendum:' {pv:item:be:true} somewhat injured.',
  badlyInjuredAddendum:' {pv:item:be:true} badly injured.',
  
  searchAlive:'{nv:char:think:true} searching {nm:item:the} whilst {pv:item:be} alive and awake is a bad idea.',
  searchNothing:'{nv:char:search:true} {nm:item:the}, but find nothing.',
  
  deathGeneral:'{nv:target:fall:true} down, dead.',
  deathConstruct:'{nv:target:fall:true} down; it seems to be inactive.',
  deathUndead:'{nv:target:fall:true} down - no longer undead, merely dead.',
  deathUndeadNoCorpse:'{nv:target:vanish:true}, apparently defeated.',
  deathElemental:'{nv:target:disipate:true}, defeated.',
  deathPhantom:'{nv:target:vanish:true}.',
  

  //----------------------------------------------------------------------------------------------
  // Complex responses (requiring functions)

  // Used deep in the parser, so prefer to use function, rather than string
  object_unknown_msg:function(name) {
    return "Oopsie woopsie! You tried to perform an action '" + name + "' that we didn't expect you to do!";
  },


  // For furniture
  stop_posture:function(char) {
    if (!char.posture) return ""
    if (!char.postureFurniture && char.posture === "standing") return ""
    const options = {char:char}
    if (w[char.postureFurniture]) options.item = w[char.postureFurniture]
    char.posture = false
    char.postureFurniture = false
    return processText(options.item ? "{nv:char:get:true} off {nm:item:the}." : "{nv:char:stand:true} up.", options)
  },



  // use (or potentially use) different verbs in the responses, so not simple strings
  say_no_one_here:"{nv:char:say:true}, '{show:text},' but no one notices.",
  say_no_response: "No one seems interested in what {nv:char:say}.",
  say_no_response_full: "{nv:char:say:true}, '{show:text},' but no one seem interested.",
  say_something:"{nv:char:say:true}, '{show:text}.'",

  // If the player does SPEAK TO MARY and Mary has some topics, this will be the menu title.
  // If the player does SPEAK TO MARY and Mary has some topics, this will be the menu title.
  speak_to_menu_title:function(char) {
    return "Talk to " + lang.getName(char, {article:DEFINITE}) + " about:";
  },
  // If the player does TELL MARY ABOUT HOUSE this will appear before the response.
  tell_about_intro:function(char, text1, text2) {
    return "{nv:char:tell:true} " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },
  // If the player does ASK MARY ABOUT HOUSE this will appear before the response.
  ask_about_intro:function(char, text1, text2) {
    return "{nv:char:ask:true} " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },
  // If the player does TALK TO MARY ABOUT HOUSE this will appear before the response.
  talk_about_intro:function(char, text1, text2) {
    return "{nv:char:talk:true} to " + lang.getName(char, {article:DEFINITE}) + " " + text2 + " " + text1 + ".";
  },



  
  // Use when the NPC leaves a room; will give a message if the player can observe it
  npc_leaving_msg:function(npc, exit) {
    let flag = npc.inSight(exit.origin)
    if (!flag) return
    if (exit.npcLeaveMsg) { return exit.npcLeaveMsg(npc) }
    let s = typeof flag === 'string' ? flag + " {nv:npc:leave}" : "{nv:npc:leave:true}"
    s += " {nm:room:the}, heading {show:dir}."
    msg(s, {room:exit.origin, npc:npc, dir:exit.dir})
  },

  // the NPC has already been moved, so npc.loc is the destination
  npc_entering_msg:function(npc, exit) {
    let flag = npc.inSight(w[exit.name])
    if (!flag) return
    if (exit.npcEnterMsg) { return exit.npcEnterMsg(npc) }
    let s = typeof flag === 'string' ? flag + " {nv:npc:enter}" : "{nv:npc:enter:true}"
    s += " {nm:room:the} from {show:dir}."
    msg(s, {room:w[exit.name], npc:npc, dir:exit.reverseNice()})
  },

  //----------------------------------------------------------------------------------------------
  // Meta-command responses


  // Save/load messages

  sl_dir_headings:['Filename', 'Game', 'Ver', 'Timestamp', 'Comment'],
  sl_dir_msg:"Ver is the version of the game that was being played when saved. Loading a save game from a different version may or may not work. You can delete a file with the DEL command. Type SAVE for general instructions on saving and loading.",
  sl_no_filename:"Trying to save with no filename.",
  sl_saved:"Saved file \"{filename}\".",
  sl_already_exists:"File already exists. To overwrite an existing file, use SAVE [filename] OVERWRITE or SAVE [filename] OW.",
  sl_file_not_found:"Load failed: File not found.",
  sl_deleted:"Deleted.",



  spoken_on:"Game mode is now 'spoken'. Type INTRO to hear the introductory text.",
  spoken_off:"Game mode is now 'unspoken'.",
  mode_brief:"Game mode is now 'brief'; no room descriptions (except with LOOK).",
  mode_terse:"Game mode is now 'terse'; room descriptions only shown on first entering and with LOOK.",
  mode_verbose:"Game mode is now 'verbose'; room descriptions shown every time you enter a room.",
  mode_silent_on:"Game is now in silent mode.",
  mode_silent_off:"Silent mode off.",
  transcript_on:"Transcript is now on.",
  transcript_off:"Transcript is now off.",
  transcript_cleared:"Transcript cleared.",
  transcript_none:"Cannot show transcript, nothing has been recorded.",
  transcript_already_on:"Transcript is already turned on.",
  transcript_already_off:"Transcript is already turned off.",
  transcript_finish:"To see the transcript, click {cmd:SCRIPT SHOW:here}.",
  new_tab_failed:"I am unable to create a new tab. This is probably because your browser is blocking me! There may be a banner across the top of the screen where you can give permission. You will need to do the command again.",
  undo_disabled:"Sorry, UNDO is not enabled in this game.",
  undo_not_available:"There are no saved game-states to UNDO back to.",
  undo_done:"Undoing...",
  again_not_available:"There are no previous commands to repeat.",
  scores_not_implemented:'Scores are not a part of this game.',
  restart_are_you_sure:'Do you really want to restart the game? {b:[Y/N]}',
  restart_no:'Restart cancelled',
  yes_regex:/^(y|yes)$/i,
  



  helpScript:function() {
    if (settings.textInput) {
      metamsg("No fear! We're here to help. We hope that this clears everything up:");      
      metamsg("{b:Playing the game:} To move between states perform actions by starting a command with {class:help-eg:PERFORM}/{class:help-eg:APPLY}/{class:help-eg:PLOT}/{class:help-eg:INSPECT}/{class:help-eg:USE}/{class:help-eg:REMOVE}/{class:help-eg:PICK}/{class:help-eg:SELECT}/{class:help-eg:COMPUTE}/{class:help-eg:ASK ABOUT}/{class:help-eg:GO TO} (note that commands are not case sensitive).");
      metamsg("{b:Oopsie woopsie:} The action you're trying to perform is either not something you should be doing right now or misspelled. The actions which you can perform differ per state of the game.");
      metamsg("{b:Hint/clue:} type {class:help-eg:HINT} / {class:help-eg:CLUE} to receive a hint from your future self that studied for the BCI exam really hard.");
      metamsg("{b:Hackerman:} type {class:help-eg:DARK} to embrace your inner hackerman (this is a toggle, type dark again to go back).");
      metamsg("{b:Accessibility:} type {class:help-eg:SPOKEN} to toggle the text being read out. Use {class:help-eg:FONT} to toggle the font.")
      metamsg("{b:About:} Type {class:help-eg:ABOUT} to learn about the author.")
      metamsg("Anything still unclear? Ask your TAs 🧠.")      
    }

    // if (settings.additionalHelp !== undefined) {
    //   for (const s of settings.additionalHelp) metamsg(s)
    // }
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  hintScript:function() {
    metamsg("Sorry, no hints available.")
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  aboutScript:function() {
    metamsg("{i:{show:settings:title} version {show:settings:version}} was written by {show:settings:author} using QuestJS (Quest 6) version {show:settings:questVersion}.", {settings:settings})
    if (settings.ifdb) metamsg("IFDB number: " + settings.ifdb)
    if (settings.thanks && settings.thanks.length > 0) {
      metamsg("{i:Thanks to:} " + formatList(settings.thanks, {lastJoiner:lang.list_and}) + ".")
    }
    if (settings.additionalAbout !== undefined) {
      for (const key in settings.additionalAbout) metamsg('{i:' + key + ':} ' + settings.additionalAbout[key])
    }
    if (settings.ifid) metamsg("{i:IFDB number:} " + settings.ifid)
    return world.SUCCESS_NO_TURNSCRIPTS
  },

  warningsScript:function() {
    switch (typeof settings.warnings) {
      case 'undefined' : metamsg('No warning have been set for this game.'); break;
      case 'string' : metamsg(settings.warnings); break;
      default: for (const el of settings.warnings) metamsg(el)
    }
    return world.SUCCESS_NO_TURNSCRIPTS;
  },

  saveLoadScript:function() {
    metamsg("To save your progress, type SAVE [filename]. By default, if you have already saved the game, you will not be permitted to save with the same filename, to prevent you accidentally saving when you meant to load. However, you can overwrite a file with the same name by using SAVE [filename] OVERWRITE or just SAVE [filename] OW.");
    metamsg("To load your game, refresh/reload this page in your browser, then type LOAD [filename].");
    metamsg("To see a list of all your QuestJS save games, type DIR or LS. You can delete a saved file with DELETE [filename] or DEL [filename].");
    metamsg("Games are saved on your computer in a special area for the browser called \"Web Storage\" or \"LocalStorage\".");
    metamsg("NOTE: If you clear your browsing data (or have your browser set to do so automatically when the browser is closed) you will lose your saved games.");
    return world.SUCCESS_NO_TURNSCRIPTS;
  },

  transcriptScript:function() {
    metamsg("The TRANSCRIPT or SCRIPT commands can be used to handle recording the input and output. This can be very useful when testing a game, as the author can go back through it and see exactly what happened, and how the user got there.")
    metamsg("Use SCRIPT ON to turn on recording and SCRIPT OFF to turn it off. To clear the stored data, use SCRIPT CLEAR. To clear the old data and turn recording on in one step, use SCRIPT START.")
    metamsg("Use SCRIPT SHOW to display it - it will appear in a new tab; you will not lose your place in the game. Some browsers (Firefox especially) may block the new tab, but will probably give the option to allow it in a banner at the top. You will prpobably need to do the command again.")
    metamsg("You can add a comment to the transcript by starting your text with an asterisk, {code:*}, or semi-colon, {code:;}, - Quest will record it, but otherwise just ignore it.")
    metamsg("Everything gets saved to \"LocalStorage\", so will be saved between sessions. If you complete the game the text input will disappear, however if you have a transcript recording, a link will be available to access it.");
    metamsg("Transcript is currently: " + (io.transcript ? 'on' : 'off'))
    return world.SUCCESS_NO_TURNSCRIPTS;
  },
  
  transcriptTitle:function() {
    let html = ''
    html += '<h2>QuestJS Transcript for "'
    html += settings.title + '" (version ' + settings.version
    html += ')</h2>'
    html += '<p><a onclick="document.download()" style="cursor:pointer;border:black solid 1px;border-radius:5px;background:silver;line-height:1em">Click here</a> to save this file to your downloads folder as "transcript.html".</p>'
    html += '<hr/>'
    return html
  },
  transcriptStart:function() {
    const now = new Date()
    return '<p><i>Transcript started at ' + now.toLocaleTimeString() + ' on ' + now.toDateString() + '</i></p>'
  },
  transcriptEnd:function() {
    const now = new Date()
    return '<p><i>Transcript ended at ' + now.toLocaleTimeString() + ' on ' + now.toDateString() + '</i></p>'
  },
  

  topicsScript:function() {
    metamsg("Use TOPICS FOR [name] to see a list of topic suggestions to ask a character about (if implemented in this game).");
    return world.SUCCESS_NO_TURNSCRIPTS;
  },
  
  betaTestIntro:function() {
    metamsg("This version is for beta-testing (" + settings.version + "); the browser reports that it is running on: " + navigator.userAgent)
    if (settings.textInput) {
      metamsg("A transcript will be automatically recorded. When you finish, do Ctrl-Enter or type SCRIPT SHOW to open the transcript in a new tab, or click the link if you reach the end of the game; it can then be saved (you should see a save button at the top) and attached to an e-mail. Alternatively, copy-and-pasted into an e-mail.")
      metamsg("You can add your own comments to the transcript by starting a command with *.")
    }
    else {    
      metamsg("A transcript will be automatically recorded. As this game has no text input, you will need to access the transcript through the developer tools. Press F12 to show the tools, and click on the \"Console\" tab. Type <code>io.scriptShow()</code> and press return. the transcript should appear in a new tab.")
    }
    metamsg("If you have not already done so, I recommend checking to ensure you can see the transcript before progressing too far though the game.")
    metamsg("PLEASE NOTE: Transcripts and save games are saved in LocalStorage; if you have this set to be deleted when you close your browser, you will lose all progress!")
    saveLoad.transcriptStart()
  },
  
  game_over_html:'<p>G<br/>A<br/>M<br/>E<br/>/<br/>O<br/>V<br/>E<br/>R</p>',




  //----------------------------------------------------------------------------------------------
  //  Language Data

  // Misc

  list_and:"and",
  list_nothing:"nothing",
  list_or:"or",
  list_nowhere:"nowhere",
  never_mind:"Never mind.",
  default_description:"It's just scenery.",
  click_to_continue:"Click to continue...",
  buy:"Buy", // used in the command link in the purchase table
  buy_headings:["Item", "Cost", ""],
  current_money:"Current money",
  inside:"inside",
  on_top:"on top",
  carrying:"carrying",


  command_split_regex:/\.| then |, then |,then |, and then |,and then /i,  // case insenstive as used early
  article_filter_regex:/^(?:the |an |a )?(.+)$/,
  joiner_regex:/\band\b|\, ?and\b|\,/,
  all_regex:/^(all|everything)$/,
  all_exclude_regex:/^((all|everything) (but|bar|except)\b)/,
  go_pre_regex:"go to |goto |go |head |",

  yesNo:['Yes', 'No'],
  tp_false:'false',
  tp_true:'true',



  //----------------------------------------------------------------------------------------------
  // Language constructs

  pronouns:{
    thirdperson:{subjective:"it", objective:"it", possessive: "its", poss_adj: "its", reflexive:"itself"},
    massnoun:{subjective:"it", objective:"it", possessive: "its", poss_adj: "its", reflexive:"itself"},
    male:{subjective:"he", objective:"him", possessive: "his", poss_adj: "his", reflexive:"himself"},
    female:{subjective:"she", objective:"her", possessive: "hers", poss_adj: "her", reflexive:"herself"},
    plural:{subjective:"they", objective:"them", possessive: "theirs", poss_adj: "their", reflexive:"themselves"},
    firstperson:{subjective:"I", objective:"me", possessive: "mine", poss_adj: "my", reflexive:"myself", possessive_name:'my'},
    secondperson:{subjective:"you", objective:"you", possessive: "yours", poss_adj: "your", reflexive:"yourself", possessive_name:'your'},
  },


  // Display verbs used in the side panel
  verbs:{
    examine:"Examine",
    use:"Use",
    take:"Take",
    drop:"Drop",
    open:"Open",
    close:"Close",
    switchon:"Switch on",
    switchoff:"Switch off",
    wear:"Wear",
    remove:"Remove",
    lookat:"Look at",
    talkto:"Talk to",
    eat:"Eat",
    drink:"Drink",
    read:"Read",
    push:"Push",
    equip:"Equip",
    unequip:"Unequip",
    attack:"Attack",
    sitOn:"Sit on",
    standOn:"Stand on",
    reclineOn:"Lie on",
    getOff:"Get off",
    fill:"Fill",
    empty:"Empty",
    turn:"Turn",
  },
  
  // Flag the state of an item in a list
  invModifiers:{
    worn:"worn",
    open:"open",
    equipped:"equipped",
    dead:"dead",
  },


  // Change the abbrev values to suit your game (or language)
  // You may want to do that in settings, which is loaded first
  exit_list:[
    {name:'northwest', abbrev:'NW', niceDir:"the northwest", type:'compass', key:103, x:-1 ,y:1, z:0, opp:'southeast', symbol:'fa-arrow-left', rotate:45}, 
    {name:'north', abbrev:'N', niceDir:"the north", type:'compass', key:104, x:0 ,y:1, z:0, opp:'south', symbol:'fa-arrow-up'}, 
    {name:'northeast', abbrev:'NE', niceDir:"the northeast", type:'compass', key:105, x:1 ,y:1, z:0, opp:'southwest', symbol:'fa-arrow-up', rotate:45}, 
    {name:'in', abbrev:'In', alt:'enter', niceDir:"inside", type:'inout', key:111, opp:'out', symbol:'fa-sign-in-alt'}, 
    {name:'up', abbrev:'U', niceDir:"above", type:'vertical', key:109, x:0 ,y:0, z:1, opp:'down', symbol:'fa-arrow-up'},
    
    {name:'west', abbrev:'W', niceDir:"the west", type:'compass', key:100, x:-1 ,y:0, z:0, opp:'east', symbol:'fa-arrow-left'}, 
    {name:'Look', abbrev:'L', type:'nocmd', key:101, symbol:'fa-eye'}, 
    {name:'east', abbrev:'E', niceDir:"the east", type:'compass', key:102, x:1 ,y:0, z:0, opp:'west', symbol:'fa-arrow-right'}, 
    {name:'out', abbrev:'Out', alt:'exit|o|leave', niceDir:"outside", type:'inout', key:106,opp:'in', symbol:'fa-sign-out-alt'}, 
    {name:'down', abbrev:'Dn', alt:'d', niceDir:"below", type:'vertical', key:107, x:0 ,y:0, z:-1, opp:'up', symbol:'fa-arrow-down'}, 

    {name:'southwest', abbrev:'SW', niceDir:"the southwest", type:'compass', key:97, x:-1 ,y:-1, z:0, opp:'northeast', symbol:'fa-arrow-down', rotate:45}, 
    {name:'south', abbrev:'S', niceDir:"the south", type:'compass', key:98, x:0 ,y:-1, z:0, opp:'north', symbol:'fa-arrow-down'}, 
    {name:'southeast', abbrev:'SE', niceDir:"the southeast", type:'compass', key:99, x:1 ,y:-1, z:0, opp:'northwest', symbol:'fa-arrow-right', rotate:45}, 
    {name:'Wait', abbrev:'Z', type:'nocmd', key:110, symbol:'fa-clock'}, 
    {name:'Help', abbrev:'?', type:'nocmd', symbol:'fa-info'}, 
  ],

  numberUnits:"zero;one;two;three;four;five;six;seven;eight;nine;ten;eleven;twelve;thirteen;fourteen;fifteen;sixteen;seventeen;eighteen;nineteen;twenty".split(";"),
  numberTens:"twenty;thirty;forty;fifty;sixty;seventy;eighty;ninety".split(";"),

  ordinalReplacements:[
    {regex:/one$/, replace:"first"},
    {regex:/two$/, replace:"second"},
    {regex:/three$/, replace:"third"},
    {regex:/five$/, replace:"fifth"},
    {regex:/eight$/, replace:"eighth"},
    {regex:/nine$/, replace:"ninth"},
    {regex:/twelve$/, replace:"twelfth"},
    {regex:/y$/, replace:"ieth"},
  ],



  conjugations:{
    i:[
      { name:"be", value:"am"},
      { name:"'be", value:"'m"},
      { name:"were", value:"was"},  // Used in present tense for, eg "I was going to do that"
    ],
    you:[
      { name:"be", value:"are"},
      { name:"'be", value:"'re"},
    ],
    we:[
      { name:"be", value:"are"},
      { name:"'be", value:"'re"},
    ],
    they:[
      { name:"be", value:"are"},
      { name:"'be", value:"'re"},
    ],
    it:[
      { name:"be", value:"is"},
      { name:"were", value:"was"},
      { name:"have", value:"has"},
      { name:"can", value:"can"},
      { name:"will", value:"will"},
      { name:"mould", value:"moulds"},
      { name:"*ould", value:"ould"},
      { name:"must", value:"must"},
      { name:"don't", value:"doesn't"},
      { name:"can't", value:"can't"},
      { name:"won't", value:"won't"},
      { name:"cannot", value:"cannot"},
      { name:"@n't", value:"n't"},
      { name:"'ve", value:"'s"},
      { name:"'be", value:"'s"},
      { name:"'ll", value:"'ll"},
      { name:"*ay", value:"ays"},
      { name:"*uy", value:"uys"},
      { name:"*oy", value:"oys"},
      { name:"*ey", value:"eys"},
      { name:"*y", value:"ies"},
      { name:"*ss", value:"sses"},
      { name:"*s", value:"sses"},
      { name:"*sh", value:"shes"},
      { name:"*ch", value:"ches"},
      { name:"*o", value:"oes"},
      { name:"*x", value:"xes"},
      { name:"*z", value:"zes"},
      { name:"*", value:"s"},
    ],
  },

  contentsForData:{
    surface:{prefix:'with ', suffix:' on it'},
    container:{prefix:'containing ', suffix:''},
  },


  //----------------------------------------------------------------------------------------------
  //                                   LANGUAGE FUNCTIONS

//@DOC
// ## Language Functions
//@UNDOC


  //@DOC
  // Returns "the " if appropriate for this item.
  // If the item has 'defArticle' it returns that; if it has a proper name, returns an empty string.
  addDefiniteArticle:function(item) {
    if (item.defArticle) {
      return item.defArticle + " ";
    }
    return item.properNoun ? "" : "the ";
  },

  //@DOC
  // Returns "a " or "an " if appropriate for this item.
  // If the item has 'indefArticle' it returns that; if it has a proper name, returns an empty string.
  // If it starts with a vowel, it returns "an ", otherwise "a ".
  addIndefiniteArticle:function(item) {
    if (item.indefArticle) {
      return item.indefArticle + " ";
    }
    if (item.properNoun) {
      return "";
    }
    if (item.pronouns === lang.pronouns.plural) {
      return "some ";
    }
    if (item.pronouns === lang.pronouns.massnoun) {
      return "";
    }
    if (/^[aeiou]/i.test(item.alias)) {
      return "an ";
    }
    return "a ";
  },

  addArticle:function(item, type){
    if (!type || (type != DEFINITE && type != INDEFINITE)) return
    return type === DEFINITE ? lang.addDefiniteArticle(item) : lang.addIndefiniteArticle(item)
  },

  getName:function(item, options) {
    if (!options) options = {}
    if (!item.alias) item.alias = item.name
    let s = ''
    // The count needs to be an item specific attribute because there could be several items in a list
    // and we need to be clear which item the count belongs to
    let count = options[item.name + '_count'] ? options[item.name + '_count'] : false
    // Or we can set count_this to an attribute, and use that to get the number
    // processText("Mandy watches as {nv:item:grow:false:count_this}.", {item:w.grown_tamarind_tree, count_this:'seedsPlanted'})
    if (options.count_this) count = item[options.count_this]
    // Or use suppressCount if we do not want the number, but do want it plural when it should
    if (!count && options.suppressCount) count = item[options.suppressCount]

    // Or if this is a countable, and loc is set, get the count from that location
    if (!count && options.loc && item.countable) count = item.countAtLoc(options.loc)
    
    if (item.getDisplayName) {
      options.count = count
      s = item.getDisplayName(options)
    }

    else if (item.pronouns === lang.pronouns.firstperson || item.pronouns === lang.pronouns.secondperson) {
      s = options.possessive ? item.pronouns.poss_adj : item.pronouns.subjective;
    }

    else {
      if (count === 'infinity') {
        s += item.infinity ? item.infinity + ' ' : 'a lot of '
      }
      else if (options.article === DEFINITE && options.suppressCount) {
        s += lang.addDefiniteArticle(item)
      }
      else if (!options.suppressCount && count && count > 1) {
        s += lang.toWords(count) + ' '
      }
      else if (options.article === DEFINITE) {
        s += lang.addDefiniteArticle(item)
      }
      else if (options.article === INDEFINITE) {
        s += lang.addIndefiniteArticle(item, count)
      }
      else if (options.article === COUNT) {
        s += 'one '
      }
      if (item.getAdjective) {
        s += item.getAdjective()
      }
      if (!count || count === 1) {
        s += (options.enhanced && item.enhancedAlias ? item.enhancedAlias : item.alias)
      }
      else {
        s += item.pluralAlias
      }
      if (options.possessive) {
        if (s.endsWith('s')) {
          s += "'"
        }
        else { 
          s += "'s"
        }
      }
    }
    if (options.capital) s = sentenceCase(s)
    if (settings.nameTransformer) s = settings.nameTransformer(s, item, options)
    s += util.getNameModifiers(item, options)
    return s
  },


  //@DOC
  // Returns the given number in words, so 19 would be returned as 'nineteen'.
  // Numbers uner -2000 and over 2000 are returned as a string of digits,
  // so 2001 is returned as '2001'.
  toWords:function(number) {
    if (typeof number !== "number") {
      errormsg ("toWords can only handle numbers");
      return number;
    }
    
    let s = "";
    if (number < 0) {
      s = "minus ";
      number = -number;
    }
    if (number < 2000) {
      let hundreds = Math.floor(number / 100);
      number = number % 100;
      if (hundreds > 0) {
        s = s + lang.numberUnits[hundreds] + " hundred";
        if (number > 0) {
          s = s + " and ";
        }
      }
      if (number < 20) {
        if (number !== 0 || s === "") {
          s = s + lang.numberUnits[number];
        }
      }
      else {
        let units = number % 10;
        let tens = Math.floor(number / 10) % 10;
        s = s + lang.numberTens[tens - 2];
        if (units !== 0) {
          s = s + '-' + lang.numberUnits[units];
        }
      }
    }
    else {
      s = number.toString();
    }
    return (s);
  },


  //@DOC
  // Returns the given number in words as the ordinal, so 19 would be returned as 'nineteenth'.
  // Numbers uner -2000 and over 2000 are returned as a string of digits with 'th' appended,
  // so 2001 is returned as '2001th'.
  toOrdinal:function(number) {
    if (typeof number !== "number") {
      errormsg ("toOrdinal can only handle numbers");
      return number;
    }
    
    let s = lang.toWords(number);
    for (let or of lang.ordinalReplacements) {
      if (or.regex.test(s)) {
        return s.replace(or.regex, or.replace);
      }
    }
    return (s + "th");
  },

  convertNumbers:function(s) {
    for (let i = 0; i < lang.numberUnits.length; i++) {
      let regex = new RegExp("\\b" + lang.numberUnits[i] + "\\b");
      if (regex.test(s)) s = s.replace(regex, "" + i);
    }
    return s;
  },

  getPlural:function(s) {
    if (s.match(/o$/)) return s + 'es'
    if (s.match(/on$/)) return s + 'a'
    if (s.match(/us$/)) return s.replace(/us$/, 'i')
    if (s.match(/um$/)) return s.replace(/um$/, 'a')
    if (s.match(/[aeiou]y$/)) return s + 's'
    if (s.match(/y$/)) return s.replace(/y$/, 'ies')
    if (s.match(/sis$/)) return s.replace(/sis$/, 'ses')
    if (s.match(/(s|ss|sh|ch|z|x)$/)) return s + 'es'
    return s + 's'
  },













  // Conjugating




  //@DOC
  // Returns the verb properly conjugated for the item, so "go" with a ball would return
  // "goes", but "go" with the player (if using second person pronouns).
  conjugate:function(item, verb, options = {}) {
    let gender = item.pronouns.subjective;
    if (gender === "he" || gender === "she") { gender = "it"; }
    const arr = lang.conjugations[gender.toLowerCase()];

    if (!arr) {
      errormsg("No conjugations found: conjugations_" + gender.toLowerCase());
      return verb;
    }
    for (let conj of arr) {
      if (conj.name === verb) {
        return conj.value;
      }
    }
    
    for (let conj of arr) {
      const name = conj.name;
      const value = conj.value;
      if (name.startsWith("@") && verb.endsWith(name.substring(1))) {
        return lang.conjugate (item, verb.substring(0, verb.length - name.length + 1)) + value;
      }
      else if (name.startsWith("*") && verb.endsWith(name.substring(1))) {
        return item, verb.substring(0, verb.length - name.length + 1) + value;
      }
    }
    return options.capitalise ? sentenceCase(verb) : verb
  },



  //@DOC
  // Returns the pronoun for the item, followed by the conjugated verb,
  // so "go" with a ball would return "it goes", but "go" with the player (if using second person pronouns)
  // would return "you go".
  // The first letter is capitalised if 'capitalise' is true.
  pronounVerb:function(item, verb, options) {
    let s = item.pronouns.subjective + " " + lang.conjugate (item, verb);
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  pronounVerbForGroup:function(item, verb, options) {
    let s = item.groupPronouns().subjective + " " + lang.conjugate (item.group(), verb);
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  verbPronoun:function(item, verb, options) {
    let s = lang.conjugate (item, verb) + " " + item.pronouns.subjective;
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  //@DOC
  // Returns the name for the item, followed by the conjugated verb,
  // so "go" with a ball would return "the ball goes", but "go" with 
  // a some bees would return "the bees go". For the player, (if using second person pronouns)
  // would return the pronoun "you go".
  // The first letter is capitalised if 'capitalise' is true.
  nounVerb:function(item, verb, options) {
    if (item === player && !player.useproperNoun) {
      return lang.pronounVerb(item, verb, options);
    }
    if (options.article === undefined) options.article = DEFINITE
    let s = lang.getName(item, options) + " " + lang.conjugate (item, verb);
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

  verbNoun:function(item, verb, options) {
    if (item === player) {
      return lang.pronounVerb(item, verb, options);
    }
    if (options.article === undefined) options.article = DEFINITE
    let s = lang.conjugate (item, verb) + " " + lang.getName(item, options);
    s = s.replace(/ +\'/, "'");  // yes this is a hack!
    return options.capitalise ? sentenceCase(s) : s;
  },

}






lang.createVerb = function(name, options = {}) {
  if (options.words === undefined) options.words = name.toLowerCase()
  if (options.ing === undefined) options.ing = name + 'ing'
  if (options.defmsg === undefined) options.defmsg = options.ing + " {nm:item:the} is not going to achieve much."
  if (options.defmsg === true) options.defmsg = "{pv:item:'be:true} not something you can do that with."
  commands.unshift(new Cmd(name, {
    regex:new RegExp("^(?:" + options.words + ") (.+)$"),
    objects:[
      {scope:options.held ? parser.isHeld : parser.isHere},
    ],
    npcCmd:true,
    defmsg:options.defmsg
  }))
}



lang.createVerbWith = function(name, options = {}) {
  if (options.words === undefined) options.words = name.toLowerCase()
  if (options.ing === undefined) options.ing = name + 'ing'
  if (options.defmsg === undefined) options.defmsg = options.ing + " {nm:item:the} is not going to achieve much."
  if (options.defmsg === true) options.defmsg = "{pv:item:'be:true} not something you can do that with."
  commands.unshift(new Cmd(name + "With", {
    regexes:[
      new RegExp("^(?:" + options.words + ") (.+) (?:using|with) (.+)$"),
      { regex:new RegExp("^(?:use|with|using) (.+) to (?:" + options.words + ") (.+)$"), mod:{reverse:true}},
      { regex:new RegExp("^(?:use|with|using) (.+) (?:" + options.words + ") (.+)$"), mod:{reverse:true}},
    ],
    objects:[
      {scope:options.held ? parser.isHeld : parser.isHere},
      {scope:parser.isHeld},
    ],
    attName:name.toLowerCase(),
    npcCmd:true,
    withScript:true,
    defmsg:options.defmsg
  }))
}




// Used by the editor
try { util; }
catch (e) {
  module.exports = { lang:lang }
}
