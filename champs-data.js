(function () {
const E = [
["Men's Amateur", "Men's", `1971|Pat Vidal|Rapid City
1972|H.L. Saylor III|Huron
1973|Rick Werner|Huron
1974|Dave Hanten|Huron
1975|Dave Hanten|Huron
1976|Curt Byrum|Onida
1977|Dave Hanten|Huron
1978|Jim Strandemo|Sioux Falls
1979|Curt Byrum|Onida
1980|Curt Byrum|Onida
1981|Pat Lockwood|Brookings
1982|Jim Entwisle|Huron
1983|Paul Rooney|Sioux Falls
1984|Randy Slechta|Sioux Falls
1985|Mike Tschetter|Sioux Falls
1986|Ray Laird III|Sioux Falls
1987|Jim Entwisle|Huron
1988|Todd Parks|Madison
1989|Ray Laird III|Sioux Falls
1990|Todd Kolb|Sioux Falls
1991|Brad Dubisar|Sioux Falls
1992|Brian Kortan|Spearfish
1993|Ryan Jansa|Sioux Falls
1994|Ryan Jansa|Sioux Falls
1995|Ryan Jansa|Sioux Falls
1996|Ryan Jansa|Sioux Falls
1997|Tyson Hazeldine|Spearfish
1998|Pat Lockwood|Brookings
1999|Mark Amundson|Sioux Falls
2000|T.J. Meyer|Rapid City
2001|Travis Stockholm|Springfield
2002|Paul Schock|Sioux Falls
2003|Ryan Jansa|Sioux Falls
2004|Ryan Jansa|Sioux Falls
2005|Michael Martin|Brookings
2006|Michael Martin|Brookings
2007|Matt Pridey|Sioux Falls
2008|Geoff Mead|Rapid City
2009|Ryan Jansa|Sioux Falls
2010|Chris Long|Garretson
2011|Tom Carlson|Sioux Falls
2012|Brandon Sigmund|Mitchell
2013|Dylan Baker|Eden Prairie, Minn.
2014|Jesse Talcott|Sioux Falls
2015|Tommy Vining|Sioux Falls
2016|Arron Lickteig|Marion
2017|Tommy Vining|Sioux Falls
2018|Jace Guthmiller|Yankton
2019|Jack Lundin|Sioux Falls
2020|Ryan Jansa|Sioux Falls
2021|Jack Lundin|Sioux Falls
2022|Jack Lundin|Sioux Falls
2023|Canceled|
2024|Kevin Gillick|Rapid City
2025|Jake Olson|Watertown
2026|Parker Edens|`],
["Women's Amateur", "Women's", `1923|Miss M. Whitbeck|
1924|Mrs. W.J. McLean|Mitchell
1925|Mrs. O.C. Ellison|Sioux Falls
1926|Mrs. W.J. McLean|Mitchell
1927|Mrs. H.L. Woodworth|Ipswich
1963|Kathy Kober|Rapid City
1964|Kathy Kober|Rapid City
1965|Kathy Kober|Rapid City
1966|Kathy Kober|Rapid City
1967|Indy Titterington|Yankton
1968|Gretchen Idema|Sioux Falls
1969|Janet Larson|Sioux Falls
1970|Gretchen Idema|Sioux Falls
1971|Gretchen Idema|Sioux Falls
1972|Patsy Ehert|Huron
1973|Peggy Schock|Sioux Falls
1974|Peggy Schock|Sioux Falls
1975|Peggy Schock|Sioux Falls
1976|Gretchen Idema|Sioux Falls
1977|Peggy Schock Kirby|Sioux Falls
1978|Becky Larson|Watertown
1979|Becky Larson|Watertown
1980|Becky Larson|Watertown
1981|Becky Larson|Watertown
1982|Peggy Kirby|Sioux Falls
1983|Kris Tschetter|Sioux Falls
1984|Kris Tschetter|Sioux Falls
1985|Kris Tschetter|Sioux Falls
1986|Kris Tschetter|Sioux Falls
1987|Jane Egan|Sioux Falls
1988|Kelly Meyers|Rapid City
1989|Jane Egan|Sioux Falls
1990|Jane Egan|Sioux Falls
1991|Laura Martin|Brookings
1992|Stacey Kolb|Sioux Falls
1993|Paula Brotsky|Brookings
1994|Stacey Kolb|Sioux Falls
1995|Sarah Smith|Belle Fourche
1996|Sarah Comstock|Sioux Falls
1997|Jordan Lintz|Rapid City
1998|Jordan Lintz|Rapid City
1999|Betsy Berry|Sturgis
2000|Betsy Berry|Sturgis
2001|Meghan Little|Sturgis
2002|Carley Roach|Brookings
2003|Shannon Johnson|Sioux Falls
2004|Shannon Johnson|Sioux Falls
2005|Shannon Johnson|Sioux Falls
2006|Shannon Johnson|Sioux Falls
2007|Maggie Murphy|Sioux Falls
2008|Karla Murra|Sioux Falls
2009|Kim Kaufman|Clark
2010|Karla Cotton|Sioux Falls
2011|Kim Kaufman|Clark
2012|Kim Kaufman|Clark
2013|Morgan Fitts|Brookings
2014|Hallie Getz|Pierre
2015|Megan Mingo|Yankton
2016|Megan Mingo|Yankton
2017|Megan Mingo|Yankton
2018|Karissa Guthrie|Pierre
2019|Katie Bartlett|Sioux Falls
2020|Laerke Jensen|Vermillion
2021|Lani Potter|Aberdeen
2022|Reese Jansa|Sioux Falls
2023|Canceled|
2024|Reese Jansa|Sioux Falls
2025|McKenzie Mages|Sioux Falls
2026|Kaitlin Strain|`],
["Men's Match Play", "Men's", `1921|Ed Meisenholder|Vermillion
1922|William Sheehan|Winner
1923|Paul Young|Mitchell
1924|Ed Meisenholder|Vermillion
1925|Walt Madden|Pierre
1926|William Sheehan|Winner
1927|G.M. Foster|Sioux Falls
1928|Syd Butts|Aberdeen
1929|Walt Madden|Pierre
1930|Ralph Porter|Sioux Falls
1931|Ralph Porter|Sioux Falls
1932|Irv Krumm|Huron
1933|Charley Howard|Aberdeen
1934|Ralph Porter|Sioux Falls
1935|Ralph Porter|Sioux Falls
1936|Bob Dugan|Watertown
1937|John Rachetto|Deadwood
1938|George Baptie|Sioux Falls
1939|Pat Fillbrandt|Aberdeen
1940|George Baptie|Sioux Falls
1941|John Rachetto|Deadwood
1942|Bob Walrath|Watertown
1943|Hobe Richards|Watertown
1944|Irv Nelson|Huron
1945|Maynard Mogck|Yankton
1946|Jack Ruhe|Watertown
1947|Pete Adams|Pierre
1948|Ivan Steen|Brookings
1949|Phil Donohue|Sioux Falls
1950|Bill Hood|Sioux Falls
1951|John Rachetto|Deadwood
1952|Ivan Steen|Brookings
1953|Don Dravland|Watertown
1954|John Enright|Sioux Falls
1955|Merle Getten|Sioux Falls
1956|Don Dravland|Watertown
1957|Ralph Larson|Sioux Falls
1958|Parley Hyde|Sioux Falls
1959|John Enright|Sioux Falls
1960|Phil Donohue|Sioux Falls
1961|Phil Donohue|Sioux Falls
1962|Byron Comstock|Sioux Falls
1963|Al Cooke|Sioux Falls
1964|Al Cooke|Sioux Falls
1965|Terry Comstock|Sioux Falls
1966|Dick Scott|Watertown
1967|George Meyers|Rapid City
1968|Dave Comstock|Sioux Falls
1969|Dave Hanten|Huron
1970|Jim Ahern|Yankton
1971|Jim Ahern|Yankton
1972|Bob Barclay|Rapid City
1973|Jim Brinkman|Huron
1974|Dave Hanten|Huron
1975|Tom Hendricks|Rapid City
1976|Dave Hanten|Huron
1977|Colin Bork|Brookings
1978|Tom Hendricks|Rapid City
1979|Curt Byrum|Onida
1980|Jim Entwisle|Huron
1981|Jim Entwisle|Huron
1982|Rob Sondreal|Huron
1983|Mike Tschetter|Sioux Falls
1984|Paul Rooney|Sioux Falls
1985|Mark Amundson|Sioux Falls
1986|Jim Entwisle|Huron
1987|Kurt Gerstner|Yankton
1988|Mike Bloomberg|Sioux Falls
1989|Mark Amundson|Brookings
1990|Mike Brummer|Rapid City
1991|Pat Lockwood|Brookings
1992|Stewart Scott|Sioux Falls
1993|Ryan Jansa|Sioux Falls
1994|Steve Reiter|Brandon
1995|Ryan Jansa|Sioux Falls
1996|Roger Legge|Aberdeen
1997|Rob Kortan|Spearfish
1998|Matt Einspahr|Brookings
1999|Mike Brummer|Rapid City
2000|Mark Amundson|Sioux Falls
2001|Wil Collins|Rapid City
2002|Paul Schock|Sioux Falls
2003|Matt Einspahr|Brookings
2004|Mark Anderson|Sioux Falls
2005|Chris Collins|Lead
2006|Chris Collins|Lead
2007|Tom Carlson|Sioux Falls
2008|Tom Carlson|Sioux Falls
2009|Nate Barbee|Dakota Dunes
2010|Nolan Meyer|Sioux Falls
2011|Tyler Rachetto|Rapid City
2012|Ben Irlbeck|Sioux Falls
2013|Grant Smith|Johnston, Iowa
2014|Tyler Barrett|Rapid City
2015|Tommy Vining|Sioux Falls
2016|Michael Keeton|Pierre
2017|Alex Shattuck|Sioux Falls
2018|TJ Nolan|Rapid City
2019|Jeff Meyerink|Sioux Falls
2020|Bryce Hammer|Sioux Falls
2021|Bryce Hammer|Sioux Falls
2022|Will Grevlos|Sioux Falls
2023|Parker Edens|Brookings
2024|Luke Honner|Sioux Falls
2025|Jake Olson|Watertown
2026|Brandon Sigmund|`],
["Women's Match Play", "Women's", `1928|June Carlson|Mitchell
1929|June Carlson|Mitchell
1930|June Carlson|Mitchell
1931|Mrs. R.A. Pankow|Sioux Falls
1932|Mrs. E.R. Doering|Sioux Falls
1933|Mrs. H.L. Woodworth|Ipswich
1934|Mrs. D.W. Jewett|Sioux Falls
1935|Mrs. K.L. Price|Sioux Falls
1936|Mrs. E.R. Doering|Sioux Falls
1937|Mrs. E.R. Doering|Sioux Falls
1938|Mrs. E.R. Doering|Sioux Falls
1939|Mrs. E.R. Doering|Sioux Falls
1940|Lucille Erickson|Viborg
1941|Mrs. E.R. Doering|Sioux Falls
1942|Alice Bauer|Aberdeen
1946|Evelyn Skinner|Sioux Falls
1947|Evelyn Skinner|Sioux Falls
1948|Mrs. E.R. Doering|Sioux Falls
1949|Mrs. Al Halverson|Sioux Falls
1950|Mrs. Griff Maxwell|Sioux Falls
1951|Mrs. Al Halverson|Sioux Falls
1952|Carol Comstock|Sioux Falls
1953|Doris Mernaugh|Watertown
1954|Barbara Krumm|Huron
1955|Barbara Krumm|Huron
1956|Indy Titterington|Yankton
1957|Carol Comstock|Sioux Falls
1958|Betty Smith|Rapid City
1959|Indy Titterington|Yankton
1960|Indy Titterington|Yankton
1961|Jeanne Comstock|Sioux Falls
1962|Indy Titterington|Yankton
2009|Dani Bellet|Lead
2010|Maggie Murphy|Sioux Falls
2011|Shannon Johnson|Omaha, Neb.
2012|Shannon Johnson|Omaha, Neb.
2013|Morgan Fitts|Brookings
2014|Janice Baumberger|Lincoln, Neb.
2015|Lauren Fitts|Brookings
2016|Hallie Getz|Pierre
2017|Katie Bartlett|Pierre
2018|Hallie Getz|Pierre
2019|Maggie Murphy|Sioux Falls
2020|Teresa Toscano|Brookings
2021|Hallie Getz|Pierre
2022|Alex Kandolin|Rapid City
2023|Reese Jansa|Sioux Falls
2024|Shakira-Ann Kuys|Brookings
2025|McKenzie Mages|Sioux Falls
2026|Allison Meyerink|`],
["Men's Mid-Amateur", "Men's", `2007|Terry Rotert|Huron
2008|Ryan Jansa|Sioux Falls
2009|Ryan Jansa|Sioux Falls
2010|Jeff Salter|Rapid City
2011|Chris Long|Garretson
2012|Brandon Sigmund|Mitchell
2013|Chris Long|Garretson
2014|Mike Swartz|Rapid City
2015|Ryan Jansa|Yankton
2016|Michael Keeton|Pierre
2017|Julean Michels|Sioux Falls
2018|Jesse Talcott|Sioux Falls
2019|Brad Jacobson|Bryant
2020|Ryan Trasamar|Sioux Falls
2021|Joel Wallner|Sioux Falls
2022|Tate McVay|Sturgis
2023|Parker Edens|Brookings
2024|Parker Edens|Brookings
2025|Brodie Hullinger|Brookings
2026|Chris Long|`],
["Women's Mid-Amateur", "Women's", `1995|Jeri Krsnak|Sioux Falls
1996|Karen Rohde|Brandon
1997|Jeri Krsnak|Sioux Falls
1998|Karen Rohde|Brandon
1999|Jeri Krsnak|Sioux Falls
2000|Jeri Krsnak|Sioux Falls
2001|Patty Coddington|Sioux Falls
2002|Heidi Ruch|Aberdeen
2003|Patty Coddington|Sioux Falls
2004|Patty Coddington|Sioux Falls
2005|Patty Coddington|Sioux Falls
2006|Peggy Kirby|Sioux Falls
2007|Lisa Meritt|Sioux Falls
2009|Peggy Kirby|Sioux Falls
2022|Karla Cotton|Sioux Falls
2023|Karla Cotton|Sioux Falls
2024|Maggie Murphy|Brookings
2025|Karla Cotton|Sioux Falls
2026|Karla Cotton|`],
["Men's Pre-Senior", "Men's", `1980|Don Isaacson|Sioux Falls
1981|Don Platt|Sioux Falls
1982|John Derby|Rapid City
1983|Don Platt|Sioux Falls
1984|Tom Egan|Sioux Falls
1985|Don Platt|Sioux Falls
1986|Steve Jansa|Sioux Falls
1987|Don Breit|Sioux Falls
1988|Don Breit|Sioux Falls
1989|Rich Kosier|Watertown
1990|Mike Brummer|Rapid City
1991|Hugh Welsh|Rapid City
1992|Jeff Gray|Sioux Falls
1993|Hugh Welsh|Rapid City
1994|Mike Brummer|Rapid City
1995|Clint Liddiard|Sioux Falls
1996|Mike Brummer|Rapid City
1997|John Anderson|Sioux Falls
1998|Derek Bursheim|Flandreau
1999|John Anderson|Sioux Falls
2000|Thom Koehler|Sioux Falls
2001|Tim Begeman|Madison
2002|Terry Brunken|Sioux Falls
2003|Mike Brummer|Rapid City
2004|Mike Brummer|Rapid City
2005|John Anderson|Sioux Falls
2006|Doug Murphy|Rapid City
2018|Brandon Sigmund|Mitchell
2019|Chris Long|Garretson
2020|Jeff Meyerink|Mitchell
2021|Jeff Meyerink|Mitchell
2022|Chris Long|Presho
2023|Justin Robel|Sioux Falls
2024|Jeff Salter|Rapid City
2025|Adam Chandler|Vermillion
2026|Michael Keeton|`],
["Men's Senior", "Men's", `1969|Phil Donohue|Sioux Falls
1970|Phil Donohue|Sioux Falls
1971|Bob Walrath|Watertown
1972|Phil Donohue|Sioux Falls
1973|Phil Donohue|Sioux Falls
1974|Bob Larson|Watertown
1975|Bob Walrath|Watertown
1976|Wayne Young|Rapid City
1977|Wayne Young|Rapid City
1978|Don Dwight|Springfield
1979|John Miller|Hot Springs
1980|Bob Larson|Watertown
1981|Marv Widness|Sioux Falls
1982|Phil Donohue|Sioux Falls
1983|Marv Widness|Sioux Falls
1984|Marv Widness|Sioux Falls
1985|Bill Branson|Yankton
1986|Marv Widness|Sioux Falls
1987|Marv Widness|Sioux Falls
1988|Dale Pederson|Beresford
1989|Bob Stewart|Sioux Falls
1990|Don Platt|Sioux Falls
1991|Dan Robar|Sioux Falls
1992|Dick Tschetter|Sioux Falls
1993|Tom Zimmer|Sioux Falls
1994|Rich Kosier|Watertown
1995|Roger Erickson|Rapid City
1996|Dan Grider, Sr.|Sioux Falls
1997|Dale Margeson|Sioux Falls
1998|Ray Laird III|Sioux Falls
1999|Ray Laird III|Sioux Falls
2000|Dick Tschetter|Sioux Falls
2001|Jim Sorensen|Beresford
2002|Steve Jansa|Sioux Falls
2003|Lee Brandt|Sioux Falls
2004|Ray Strand|Rapid City
2005|Mike Brummer|Rapid City
2006|Mike Brummer|Rapid City
2007|Mike Brummer|Rapid City
2008|Mike Brummer|Rapid City
2009|Lou Mendoza|Eagle Butte
2010|Greg Kendall|Sioux Falls
2011|Tim Begeman|Madison
2012|Steve Dietrich|Sioux Falls
2013|Doug Murphy|Rapid City
2014|Ron Gates|Mitchell
2015|Mike Brummer|Rapid City
2016|Lyle Pagel|Rapid City
2017|Derek Burshiem|Flandreau
2018|Terry Brunken|Sioux Falls
2019|Bob Felker|Madison
2020|Derek Burshiem|Flandreau
2021|Mike Brummer|Rapid City
2022|Sam Prue|N Sioux City
2023|Scott Holm|Brookings
2024|Derek Burshiem|Flandreau
2025|Steve Beardsley|Rapid City
2026|Scott Holm|`],
["Women's Senior", "Women's", `1974|Ruth Miller|Sioux Falls
1975|Ruth Miller|Sioux Falls
1976|Ruth Miller|Sioux Falls
1977|Ruth Miller|Sioux Falls
1978|Ruth Miller|Sioux Falls
1979|Ruth Miller|Sioux Falls
1981|Verlyne Larson|Sioux Falls
1982|Ila Michael|Rapid City
1983|Ila Michael|Rapid City
1984|Jo Johnson|Sioux Falls
1985|Ila Michael|Rapid City
1986|Ila Michael|Rapid City
1987|Ila Michael|Rapid City
1988|Anne Borgmann|Sioux Falls
1989|Anne Borgmann|Sioux Falls
1990|Ila Michael|Rapid City
1991|Anne Borgmann|Sioux Falls
1992|Anne Borgmann|Sioux Falls
1993|Pam Jansa|Sioux Falls
1994|Anne Borgmann|Sioux Falls
1995|Anne Borgmann|Sioux Falls
1996|Helen Plumage|Aberdeen
1997|Helen Plumage|Aberdeen
1998|Anne Borgmann|Sioux Falls
1999|Anne Borgmann|Sioux Falls
2000|Anne Borgmann|Sioux Falls
2001|Mary Schneider|Dakota Dunes
2002|Anne Borgmann|Sioux Falls
2003|Anne Borgmann|Sioux Falls
2004|Mary Schneider|Dakota Dunes
2005|Anne Borgmann|Sioux Falls
2006|Karen Rohde|Sioux Falls
2007|Arlys Kraft|Rapid City
2009|Karen Rohde|Rapid City
2010|Arlys Kraft|Rapid City
2011|Patty Coddington|Sioux Falls
2012|Patty Coddington|Sioux Falls
2014|Patty Coddington|Sioux Falls
2015|Patty Coddington|Sioux Falls
2016|Patty Coddington|Sioux Falls
2017|Pam Hoiland|Sioux Falls
2018|Jackie Witlock|Aberdeen
2019|Patty Coddington|Sioux Falls
2020|Jackie Witlock|Aberdeen
2021|Dawn McInroy|Sioux Falls
2022|Jennifer Stalley|Pierre
2023|Julie Jansa|Sioux Falls
2024|Julie Jansa|Sioux Falls
2025|Julie Jansa|Sioux Falls
2026|Julie Jansa|`],
["Men's Senior Match Play", "Men's", `2022|Brad Buche|Mitchell
2023|Mike Brummer|Rapid City
2024|Brad Buche|Mitchell
2025|Rob Dewit|Sioux Falls
2026|Steve Beardsley|`],
["Women's Senior Match Play", "Women's", `2023|Royaune Jasinski|Rapid City
2024|Marna Raburn|Rapid City
2025|Jennifer Stalley|Pierre
2026|Marna Raburn|`],
["Men's Masters Match Play", "Men's", `2025|Sam Prue|N. Sioux City
2026|Duane Broek|`],
["Men's Masters", "Men's", `2025|Bill Carland|Sioux Falls
2026|Bill Carland|`],
["Women's Masters", "Women's", `2025|Vonda Bjorklund|Volga
2026|Cindy Olson|`],
["Junior Boys'", "Junior", `1979|Mike Tschetter|Sioux Falls
1980|Glenn Herrick|Huron
1981|John Stavig|Sioux Falls
1982|Kelly Johnson|Sioux Falls
1983|Chad Viereck|Brandon
1984|Marty Vandemore|Sioux Falls
1985|Scott Holm|Brookings
1986|Kevin Zimmer|Sioux Falls
1987|Brett Peterson|Watertown
1988|Brad Dubisar|Sioux Falls
1989|Jeff Salter|Rapid City
1990|Steve Reiter|Brandon
1991|Tyler Rachetto|Lead
1992|Shane Bisson|Flandreau
1993|Wil Collins|Rapid City
1994|Todd Houghton|Rapid City
1995|Wil Collins|Rapid City
1996|Wil Collins|Rapid City
1997|T.J. Meyer|Rapid City
1998|Trevor Larson|Rapid City
1999|Gabe Vogt|Pierre
2000|Jeff Wilde|Watertown
2001|Paul Green|Madison
2002|Chris Collins|Lead
2003|Tom Carlson|Sioux Falls
2004|Tim Kalil|Rapid City
2005|Tyler Evenson|Lead
2006|Matt Pridey|Sioux Falls
2007|Lance Collins|Lead
2008|Eric Hieb|Mitchell
2009|Derek Dillon|Garretson
2010|Josh Weismantel|Watertown
2011|Chris Gaher|Sioux Falls
2012|Max Donohue|Sioux Falls
2013|Max Donohue|Sioux Falls
2014|Max Donohue|Sioux Falls
2015|Jacob Otta|Sioux Falls
2016|Bryce Hammer|Sioux Falls
2017|Will Grevlos|Sioux Falls
2018|Jack Lundin|Sioux Falls
2019|Jack Lundin|Sioux Falls
2020|Ben Daane|Rapid City
2021|Jake Olson|Watertown
2022|Bennett Geraets|Sioux Falls
2023|Jake Olson|Watertown
2024|Riley Christensen|Sioux Falls
2025|Charlie Swift|Sioux Falls
2026|Asher Dannenbring|`],
["Junior Girls'", "Junior", `1979|Kris Tschetter|Sioux Falls
1980|Nancy Steen|Sioux Falls
1981|Nancy Steen|Sioux Falls
1982|Kris Tschetter|Sioux Falls
1983|Amy Butzer|Sioux Falls
1984|Amy Butzer|Sioux Falls
1985|Kris Heatherly|Lennox
1986|Jane Egan|Sioux Falls
1987|Laura Martin|Brookings
1988|Karmen Stanford|Deadwood
1989|Stacey Kolb|Sioux Falls
1990|Wendy Maynes|Sioux Falls
1991|Sarah Comstock|Sioux Falls
1992|Sarah Comstock|Sioux Falls
1993|Sarah Smith|Belle Fourche
1994|Nikki Stangarone|Rapid City
1995|Nikki Stangarone|Rapid City
1996|Betsy Berry|Sturgis
1997|Betsy Berry|Sturgis
1998|Sarah Strand|Rapid City
1999|Shannon Johnson|Sioux Falls
2000|Shannon Johnson|Sioux Falls
2001|Kelly Evans|Brookings
2002|Karla Murra|Sioux Falls
2003|Mikala Henzlik|Rapid City
2004|Jenna Buckwalter|Watertown
2005|Jenna Buckwalter|Watertown
2006|Kati Scholten|Brookings
2007|Paige Osterloo|Rapid City
2008|Taylor Smalley|Pierre
2009|Dani Selberg|Brookings
2010|Megan Mingo|Yankton
2011|Hailee Pieper|Watertown
2012|Jordan Bormann|Parkston
2013|Megan Mingo|Yankton
2014|Katie Bartlett|Pierre
2015|Katie Bartlett|Pierre
2016|Katie Bartlett|Pierre
2017|Alex Kandolin|Rapid City
2018|Alex Kandolin|Rapid City
2019|Shannon McCormick|Sioux Falls
2020|Shannon McCormick|Sioux Falls
2021|Masy Mock|Mitchell
2022|Reese Jansa|Sioux Falls
2023|Bryn Huber|Huron
2024|Olivia Braun|Aberdeen
2025|Rylan Horning|Rapid City
2026|Olivia Braun|`],
["Two-Man", "Team", `1987|Bill Scholten / Matt Einspahr|Brookings
1988|Alan Bales / Jim Entwisle|Huron
1989|Brady Marone / Chad Dubisar|Sioux Falls
1990|Greg Scott / Mike Pelzl|Aberdeen
1991|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings
1992|Jason Young / Robert Williams|Pierre
1993|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings
1994|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings
1995|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings
1996|Mark Amundson / Pat Lockwood|Sioux Falls / Brookings
1997|Rob Kortan / Tyson Hazledine|Spearfish
1998|Rob Kortan / Tyson Hazledine|Spearfish
1999|Rob Kortan / Wil Collins|Spearfish / Rapid City
2000|Chad Dubisar / Matt Einspahr|Sioux Falls / Brookings
2001|Chad Dubisar / Matt Einspahr|Sioux Falls / Brookings
2002|Jim Anderson / John Anderson|Sioux Falls
2003|Mike Brummer / Pat Lockwood|Sioux Falls / Brookings
2004|Tyler Rachetto / Chris Collins|Lead
2005|Robb Bierbaum / Brett Egge|Sioux Falls
2006|Mark Anderson / Michael Martin|Sioux Falls / Brookings
2007|Todd Hofland / Brett Steen|Brookings
2008|Mike Brummer / Pat Lockwood|Rapid City / Brookings
2009|Brett Coluccio / Brett Abbotts|Mitchell
2010|Tom Carlson / Brett Egge|Sioux Falls
2011|Tyler Evenson / Tyler Rachetto|Lead / Rapid City
2012|Danny Amundson / Charlie Jacobson|Sioux Falls
2013|Ryan Tjeerdsma / Tad Leistico|Slayton, MN / Elkhorn, NE
2014|Brandon Sigmund / Jeff Meyerink|Mitchell
2015|Tad Leistico / Michael Keeton|Elkhorn, NE / Pierre
2016|Sam Olson / Parker Klitzke|Sioux Falls
2017|Sam Olson / Parker Klitzke|Sioux Falls
2018|Cole Peterson / Tate Arends|Vermillion / Sioux Falls
2019|TJ Nolan / Ryan Nolan|Rapid City
2020|Brandon Sigmund / Jeff Meyerink|Mitchell
2021|Ben Daane / Ryan Neff|Rapid City / Sioux Falls
2022|Will Grevlos / Tyler Westra|Sioux Falls
2023|Tyler Evenson / Lance Collins|Hermosa / Sturgis
2024|Radley Mauney / Taten Mauney|Sioux Falls
2025|Ryan Trasamar / Danny Amundson|Sioux Falls
2026|Bob & Colby West|`],
["Two-Woman", "Team", `1987|Jane Egan / Jenny Flanagan|Sioux Falls
1988|Patty Coddington / Helen Lang|Sioux Falls
1989|Jeri Krsnak / Pam Hoiland|Sioux Falls
1990|Patty Coddington / Helen Lang|Sioux Falls
1991|Jeri Krsnak / Pam Hoiland|Sioux Falls
1992|Jeri Krsnak / Pam Hoiland|Sioux Falls
1993|Jeri Krsnak / Pam Hoiland|Sioux Falls
1994|Jenny Stangarone / Nikki Stangarone|Rapid City
1995|Jordan Lintz / Sarah Smith|Rapid City
1996|Sara Stulken / Jenny Chandler|Vermillion
1997|Jordan Lintz / Ashley Lintz|Rapid City
1998|Jody Swier / Carrie Swier|Arlington
1999|Jordan Lintz / Ashley Lintz|Rapid City
2000|Betsy Berry / Meghan Little|Sturgis
2001|Peggy Kirby / Patty Coddington|Sioux Falls
2002|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion
2003|Kati Scholten / Annie Spaulding|Brookings
2004|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion
2005|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion
2006|Shannon Johnson / Allison Stewart|Sioux Falls / Vermillion
2007|Kati Scholten / Chelsea Cadwell|Brookings / Sioux Falls
2008|Sydney Sturdevant / Allison Stewart|Sioux Falls / Vermillion
2009|Morgan Fitts / Lauren Fitts|Brookings
2010|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls
2011|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls
2012|Dani Bellet / Jenny Coluccio|Lead / Sioux Falls
2013|Maggie Leland / Kali Trautman|Alexandria, Minn. / Clear Lake
2014|Megan Mingo / Hallie Getz|Yankton / Pierre
2015|Megan Mingo / Hallie Getz|Yankton / Pierre
2016|Megan Mingo / Hallie Getz|Yankton / Pierre
2017|Sydney Bormann / Sydney Weber|Parkston
2018|Karissa Guthrie / Katie Bartlett|Pierre
2019|Katie Bartlett / Julia Hall|Pierre / Vermillion
2020|Julie Jansa / Reese Jansa|Sioux Falls
2021|Julie Jansa / Reese Jansa|Sioux Falls
2022|Danielle Podoll / Lauryn Driscoll|Aberdeen / Hartford
2023|Julie Jansa / Reese Jansa|Sioux Falls
2024|Julie Jansa / Reese Jansa|Sioux Falls
2025|Julie Jansa / Reese Jansa|Sioux Falls
2026|Molly Stevens & Natalie Young|`],
["Mid-Amateur Two-Man", "Team", `2007|Kyle Repp / Steve Weiland|Yankton
2008|Ryan Jansa / Steve Reiter|Sioux Falls / Brandon
2009|Jeff Salter / Jon Lesselyoung|Rapid City
2010|Tyler Rachetto / Shane Tipton|Rapid City
2011|Ryan Jansa / Kasey Kogel|Sioux Falls
2012|Ryan Jansa / Kasey Kogel|Sioux Falls / Harrisburg
2013|Ryan Jansa / Kasey Kogel|Sioux Falls / Harrisburg
2014|Tad Leistico / Aaron Tom|Elkhorn, Neb. / Sioux Falls
2015|Chris Long / Galen Vavra|Garretson / Hartford
2016|Brad Jacobson / Charlie Jacobson|Bryant / Sioux Falls
2017|Brodie Hullinger / Michael Keeton|Brookings / Pierre
2018|Tyler Evenson / Tyler Rachetto|Rapid City
2019|Brodie Hullinger / Michael Keeton|Brookings / Pierre
2020|Brad Haynes / Luke Weber|Philip
2021|Brad Jacobson / Charlie Jacobson|Bryant / Sioux Falls
2022|Justin Robel / Nathan Houser|Sioux Falls
2023|Ryan Trasamar / Matt Johnson|Sioux Falls / Gregory
2024|Chris Long / Tom Carlson|Presho / Sioux Falls
2025|Chris Long / Tom Carlson|Presho / Sioux Falls
2026|Ryan Ames & Riley Duncanson|`],
["Mid-Amateur Two-Woman", "Team", `2017|Aubrey O’Connell / Jackie Witlock|Aberdeen
2018|Aubrey O’Connell / Jackie Witlock|Aberdeen
2019|Amy Nawroth / Mary Neuroth|Watertown
2020|Amy Nawroth / Mary Neuroth|Watertown
2021|Amy Nawroth / Mary Neuroth|Watertown
2022|Karla Cotton / Jill Mollner|Sioux Falls
2023|Karla Cotton / Jill Mollner|Sioux Falls
2024|Natalie Young / Jennifer Stalley|Pierre
2025|Karla Cotton / Jill Mollner|Sioux Falls
2026|Karla Cotton & Jill Mollner|`],
["Pre-Senior Two-Man", "Team", `2006|Steve Beardsley / Doug Murphy|Rapid City
2019|Ryan Jansa / Keith Kogel|Sioux Falls
2020|Ryan Jansa / Keith Kogel|Sioux Falls
2021|Jeff Meyerink / Josh Hartman|Mitchell
2022|Ryan Jansa / Kasey Kogel|Sioux Falls
2023|Ryan Messick / TJ Meyer|Rapid City
2024|Jon Burns / Stuart Stein|Sioux Falls / Watertown
2025|Brodie Hullinger / Michael Keeton|Brookings / Pierre
2026|Charlie Jacobson & Matt Johnson|`],
["Senior Two-Man", "Team", `2003|Barry Winter / Ray Strand|Rapid City
2004|Steve Jansa / Keel Coddington|Sioux Falls
2005|John Knox / Lou Mendoza|Onida / Eagle Butte
2006|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen
2007|Bob O’Keefe / Jeff Jones|Sioux Falls
2008|Steve Beardsley / Doug Murphy|Rapid City
2009|Steve Beardsley / Doug Murphy|Rapid City
2010|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen
2011|Bill Joens / Jeff Gray|Brandon
2012|Steve Pelzl / Mark Jorgensen|Aberdeen
2013|Derek Burshiem / Kent Speirs|Flandreau / Huron
2014|Tim Begeman / Dick Fawbush|Madison
2015|Mike Brummer / Steve Pelzl|Rapid City / Aberdeen
2016|Paul Schock / Pat Lockwood|Sioux Falls / Brookings
2017|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls
2018|Doug Murphy / Steve Beardsley|Rapid City / Hartford
2019|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls
2020|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls
2021|Dennis Breske / Mike Begeman|Sioux Falls
2022|Mike Brummer / Tom Reynolds|Rapid City / Sioux Falls
2023|Dan Lecy / Jerry Jasinski|Rapid City
2024|Todd Hofland / Brett Steen|Brookings
2025|Bryan Guischer / Dan Bruckner|Deadwood / Spearfish
2026|Scott Holm & Pat Lockwood|`],
["Senior Two-Woman", "Team", `2017|Sarah Egan / Sharon Wilson|Sioux Falls
2018|Jeri Krsnak / Pam Hoiland|Sioux Falls
2019|Julie King / Colette Quam|Sioux Falls / Aberdeen
2020|Jeri Krsnak / Pam Hoiland|Sioux Falls
2021|Jeri Krsnak / Pam Hoiland|Sioux Falls
2022|Joan Hegerfeld-Baker / Cindy Olson|Volga / Sioux Falls
2023|Julie King / Colette Quam|Sioux Falls / Aberdeen
2024|Lois Quam / Sharla VanWettering|Sioux Falls
2025|Marna Raburn / Cindy Olson|Rapid City / Sioux Falls
2026|Betsy Dewit & Lisa Dorsey|`],
["Masters Two-Man", "Team", `2025|Robert McGlone / Stan Anker|Rapid City
2026|Kyle Repp & Steve Weiland|`],
["Masters Two-Woman", "Team", `2025|Vonda Bjorklund / Kathy Funk|Volga / Custer
2026|Leanna Jenner & Susan Mulz|`],
["Adult-Junior", "Team", `2007|Greg & Justin Johnson|Sioux Falls
2008|Steve Jansa & Mitch Brunick|Sioux Falls
2009|Dean & Tyler Zahn|Aberdeen
2010|Jason & Mac Young|Rapid City
2011|Tony & Taylor Hyronimus|Sioux Falls
2012|Ben & Ian Rinken|Sioux Falls
2013|Jeff & Jayson Heck|Omaha, NE / Rapid City
2014|Tom & J.J. Cooney|Lake Andes
2015|Tom & J.J. Cooney|Lake Andes
2016|Mike & Will Grevlos|Sioux Falls
2017|Todd & Justin Kolb|Sioux Falls
2018|Mike & Austin Hoss|Pierre
2019|Ryan & Reese Jansa|Sioux Falls
2020|Ryan & Reese Jansa|Sioux Falls
2021|Ryan & Reese Jansa|Sioux Falls
2022|Canceled|
2023|Jason & Sara Sudenga|Sioux Falls
2024|Riley & Jayce Pugh|Miller
2025|Jon Sorensen & Tori Peterson|Beresford / Flandreau
2026|Tyson & Aric Blom|`],
["Husband-Wife", "Team", `1975|Tom and Mary Egan|Sioux Falls
1976|Jim and Sharon Sorensen|Beresford
1977|John and Anne Borgmann|Sioux Falls
1978|John and Anne Borgmann|Sioux Falls
1979|Don and Cheryl Breit|Sioux Falls
1980|Don and Cheryl Breit|Sioux Falls
1981|Rick and Jeri Krsnak|Sioux Falls
1982|Don and Cheryl Breit|Sioux Falls
1983|Rick and Jeri Krsnak|Sioux Falls
1984|Rick and Jeri Krsnak|Sioux Falls
1985|Rick and Jeri Krsnak|Sioux Falls
1986|Ray III and Patty Laird|Sioux Falls
1987|Rick and Jeri Krsnak|Sioux Falls
1988|Ray III and Patty Laird|Sioux Falls
1989|Mark and Margaret Amundson|Brookings
1990|Alan and Sharon Bales|Huron
1991|Mark and Margaret Amundson|Brookings
1992|Tom and Marilyn Summons|Rapid City
1993|Craig and Bonnie Golz|Aberdeen
1994|Kevin and Peggy Kirby|Sioux Falls
1995|Brian and Stacy Prisbe|Aberdeen
1996|Mark and Margaret Amundson|Brookings
1997|Mark and Margaret Amundson|Brookings
1998|Dick and Mary Schneider|Dakota Dunes
1999|Mike and Julie Davidson|Brandon
2000|Scott and Jackie Witlock|Aberdeen
2001|Don and Cheryl Breit|Sioux Falls
2002|Scott and Jackie Witlock|Aberdeen
2003|Bert and Cindy Olson|Sioux Falls
2004|Nick and Jody Driscoll|Hartford
2005|Greg and Judy Kendall|Sioux Falls
2006|Ryan and Julie Jansa|Sioux Falls
2007|Ryan and Julie Jansa|Sioux Falls
2008|Ryan and Julie Jansa|Sioux Falls
2009|Ryan and Julie Jansa|Sioux Falls
2010|Ryan and Julie Jansa|Sioux Falls
2011|Ryan and Julie Jansa|Sioux Falls
2012|Brett and Jenny Coluccio|Sioux Falls
2013|Brett and Jenny Coluccio|Sioux Falls
2014|Dustin and Ashley Horning|Rapid City
2015|Ryan and Julie Jansa|Sioux Falls
2016|Ryan and Julie Jansa|Sioux Falls
2017|Justin and Morgan Johnson|Watertown
2018|Ryan and Julie Jansa|Sioux Falls
2019|Tyler and Danielle Evenson|Hermosa
2020|Justin and Morgan Johnson|Watertown
2021|Justin and Morgan Johnson|Watertown
2022|Mitch and Kylie Brunick|Sioux Falls
2023|Brodie and Kelly Evans-Hullinger|Brookings
2024|Tyler and Danielle Evenson|Hermosa
2025|Tyler and Danielle Evenson|Hermosa
2026|Ryan & Julie Jansa|`],
["Senior Husband-Wife", "Team", `2011|Steve and Cindy Weiland|Yankton
2012|Keel and Patty Coddington|Sioux Falls
2013|Bert and Cindy Olson|Sioux Falls
2014|Steve and Cindy Weiland|Yankton
2015|Steve and Cindy Weiland|Yankton
2016|Bert and Cindy Olson|Sioux Falls
2017|Dan and Dixie Lecy|Rapid City
2018|Bert and Cindy Olson|Sioux Falls
2019|Steve and Cindy Weiland|Yankton
2020|Mike and Mary Neuroth|Watertown
2021|Steve and Cindy Weiland|Yankton
2022|Mike and Mary Neuroth|Watertown
2023|Mike and Mary Neuroth|Watertown
2024|Jerry and Royaune Jasinski|Rapid City
2025|Tim and Marna Raburn|Rapid City
2026|Rob & Betsy Dewit|`],
["Masters Husband-Wife", "Team", `2025|Steve and Cindy Weiland|Yankton
2026|Alan Baker & Joan Hegerfeld-Baker|`],
["Mixed Team", "Team", `2011|Chris Long / Shannon Johnson|Garretson / Omaha, Neb.
2012|Max Donohue / Kim Kaufman|Sioux Falls / Clark
2013|Ryan and Julie Jansa|Sioux Falls
2014|Hudson Carpenter / Morgan Fitts|Sioux Falls / Pierre
2015|Matt Johnson / Hallie Getz|Sioux Falls
2016|Lukas Davison / Alli Plath|Harrisburg
2017|Michael Keeton / Hallie Getz|Pierre
2026|Derek Andersen & Reese Jansa|`]
];
// Attract backgrounds — 2160×1210 JPGs; add more paths to rotate
window.CHAMPS_BG = ['uploads/golf1.jpg', 'uploads/golf2.jpg', 'uploads/golf3.jpg', 'uploads/golf4.jpg'];
window.CHAMPS_BG_EVERY = 4; // names per photo
window.KIOSK_CHAMPS = E.map(([n, g, t]) => ({ n, g, rows: t.split('\n').map(l => { const p = l.split('|').map(s => s.trim()); p[1] = p[1].replace(/\s*\/\s*/g, ' & ').replace(/\s+and\s+/gi, ' & '); return p; }) }));
})();
