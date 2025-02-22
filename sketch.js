<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.3px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.3px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    span.s1 {font-kerning: none}
    span.s2 {font: 13.3px Courier; font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// Global variables</span></p>
<p class="p1"><span class="s1">let brainCells = 0; // Current number of BrainCells</span></p>
<p class="p1"><span class="s1">let bcps = 0; // BrainCells per second</span></p>
<p class="p1"><span class="s1">let upgrades = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>{ name: "Meme", cost: 10, baseCost: 10, bcps: 0.1, count: 0 },</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>{ name: "TikTok", cost: 100, baseCost: 100, bcps: 1, count: 0 },</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>{ name: "Doomscroller", cost: 1000, baseCost: 1000, bcps: 10, count: 0 }</span></p>
<p class="p1"><span class="s1">]; // Array of upgrade objects</span></p>
<p class="p1"><span class="s1">let brainSize = 100; // Base size of the brain</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Setup function - runs once at the start</span></p>
<p class="p1"><span class="s1">function setup() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>createCanvas(600, 400); // Create a 600x400 pixel canvas</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>textAlign(CENTER, CENTER); // Center-align text both horizontally and vertically</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>textSize(16); // Default text size</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>frameRate(30); // Set frame rate to 30 FPS</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Draw function - game loop, runs every frame</span></p>
<p class="p1"><span class="s1">function draw() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>background(220); // Light gray background</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Update BrainCells based on BCPS (30 FPS)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>brainCells += bcps / 30;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Draw the brain with pulsating effect</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let pulse = sin(frameCount * 0.05) * 10; // Pulsation based on frame count</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>fill(255, 150, 150); // Light pink fill for brain</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>stroke(200, 100, 100); // Darker pink outline</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>strokeWeight(2); // Outline thickness</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>ellipse(width / 2, height / 2 - 50, brainSize + pulse, brainSize + pulse); // Draw brain</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Draw brain lines to simulate folds</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; 8; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let angle = map(i, 0, 8, 0, TWO_PI); // Map 8 lines around the circle</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let x1 = width / 2 + cos(angle) * (brainSize / 3 + pulse / 3);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let y1 = height / 2 - 50 + sin(angle) * (brainSize / 3 + pulse / 3);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let x2 = width / 2 + cos(angle) * (brainSize / 2 + pulse / 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let y2 = height / 2 - 50 + sin(angle) * (brainSize / 2 + pulse / 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>line(x1, y1, x2, y2); // Draw each fold line</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Draw instruction text below brain</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>fill(0); // Black text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>noStroke(); // Remove outline for text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>text("Click to Restore!", width / 2, height / 2 + 20);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>text("Made by Ryan N with Grok", width / 2, height / 2 + 170);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Draw stats at the top</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>textSize(20); // Larger text for stats</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>text(`BrainCells: ${floor(brainCells)}`, width / 2, 20); // Display integer BrainCells</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>text(`BCPS: ${bcps.toFixed(1)}`, width / 2, 50); // Display BCPS with 1 decimal</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Draw upgrade buttons on the right</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; upgrades.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let u = upgrades[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let x = width - 150; // Position 150 pixels from right edge</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let y = 100 + i * 70; // Stack vertically with 70px spacing</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Check if mouse is hovering over the button</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let isHover = mouseX &gt; x &amp;&amp; mouseX &lt; x + 140 &amp;&amp; mouseY &gt; y &amp;&amp; mouseY &lt; y + 60;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>fill(isHover ? 180 : 150); // Lighter gray if hovered, darker if not</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>stroke(100); // Dark gray outline</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>strokeWeight(1); // Thin outline</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>rect(x, y, 140, 60, 10); // Draw button with rounded corners</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Draw upgrade text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>fill(0); // Black text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>noStroke();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>textSize(14); // Smaller text for buttons</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>text(`${u.name} (${u.count})`, x + 70, y + 15); // Name and count</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>text(`Cost: ${floor(u.cost)} BC`, x + 70, y + 30); // Current cost</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>text(`+${u.bcps} BCPS`, x + 70, y + 45); // BCPS gain</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Smoothly decrease brainSize back to 100 after click</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (brainSize &gt; 100) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>brainSize -= 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Mouse pressed function - handles clicks</span></p>
<p class="p1"><span class="s1">function mousePressed() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Check if clicked on brain</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let d = dist(mouseX, mouseY, width / 2, height / 2 - 50);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (d &lt; 60) { // Fixed click radius for consistency</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>brainCells += 1; // Add 1 BrainCell per click</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>brainSize = 120; // Enlarge brain for feedback</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Check if clicked on upgrade buttons</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; upgrades.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let u = upgrades[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let x = width - 150;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let y = 100 + i * 70;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (mouseX &gt; x &amp;&amp; mouseX &lt; x + 140 &amp;&amp; mouseY &gt; y &amp;&amp; mouseY &lt; y + 60) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (brainCells &gt;= u.cost) { // Check if player has enough BrainCells</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>brainCells -= u.cost; // Deduct cost</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bcps += u.bcps; // Add BCPS</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>u.count++; // Increment purchase count</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>u.cost = u.baseCost * pow(1.15, u.count); // Update cost exponentially</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s2"></span><br></p>
</body>
</html>
