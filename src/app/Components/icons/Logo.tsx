import { ReactElement } from "react";

const Logo = ({
  size
}: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size ? size : '600'}
      height={size ? size : '600'}
      viewBox="0 0 600 600"
    >
      <path
        d="M0 0 C198 0 396 0 600 0 C600 198 600 396 600 600 C402 600 204 600 0 600 C0 402 0 204 0 0 Z "
        fill="#FEFEFE"
        transform="translate(0,0)"
      />
      <path
        d="M0 0 C1.10038653 0.93386417 2.19942115 1.86932141 3.29790592 2.80542183 C4.2161666 3.58655647 4.2161666 3.58655647 5.152978 4.38347161 C8.08754534 6.95182836 10.83015827 9.69911505 13.57788086 12.46435547 C14.19337799 13.07970657 14.80887512 13.69505768 15.44302368 14.32905579 C17.45267998 16.3394021 19.45878274 18.35325411 21.46484375 20.3671875 C22.86709544 21.77130661 24.26956981 23.17520336 25.67225647 24.57888794 C29.34541268 28.25584379 33.01555454 31.93579391 36.68505859 35.61639404 C40.43729767 39.37890237 44.19240493 43.13854579 47.94726562 46.8984375 C55.30097336 54.26283749 62.65149708 61.63040667 70 69 C72.80387058 67.72113231 74.85248535 66.39618952 77.02459717 64.21591187 C77.59384415 63.64941422 78.16309113 63.08291656 78.74958801 62.49925232 C79.36170639 61.87994339 79.97382477 61.26063446 80.60449219 60.62255859 C81.25856552 59.96877731 81.91263885 59.31499603 82.58653259 58.6414032 C84.74475514 56.48178862 86.89580936 54.3151788 89.046875 52.1484375 C90.54287809 50.64870384 92.03932369 49.14941147 93.53619385 47.65054321 C97.47300225 43.70610188 101.40376734 39.75569106 105.33331299 35.80401611 C109.34488498 31.77197847 113.36213094 27.74560286 117.37890625 23.71875 C125.25817445 15.81803787 133.13107125 7.9110091 141 0 C143.80835357 1.28075662 145.85994023 2.61049398 148.03782272 4.79172707 C148.6135804 5.36350264 149.18933807 5.93527822 149.78254294 6.52438033 C150.40511615 7.15277922 151.02768936 7.7811781 151.66912842 8.42861938 C152.33816515 9.09594727 153.00720189 9.76327515 153.69651246 10.4508251 C155.94145523 12.69246855 158.17916606 14.94119504 160.41699219 17.18994141 C162.02304358 18.79655681 163.62953524 20.4027322 165.23643494 22.00849915 C169.60211923 26.37360856 173.96160057 30.74486621 178.32001781 35.11722994 C182.87418494 39.6838818 187.43399936 44.24488756 191.9932251 48.80648804 C199.6463318 56.46510886 207.29593396 64.12721173 214.94287109 71.79199219 C222.81910764 79.68658796 230.69744291 87.57907953 238.57861328 95.46875 C239.30735736 96.19828225 239.30735736 96.19828225 240.05082354 96.94255252 C242.48811019 99.38244926 244.9254382 101.82230468 247.36278677 104.26213956 C267.58160652 124.50169129 287.79309477 144.74855335 308 165 C306.71924338 167.80835357 305.38950602 169.85994023 303.20827293 172.03782272 C302.63649736 172.6135804 302.06472178 173.18933807 301.47561967 173.78254294 C300.84722078 174.40511615 300.2188219 175.02768936 299.57138062 175.66912842 C298.90405273 176.33816515 298.23672485 177.00720189 297.5491749 177.69651246 C295.30753145 179.94145523 293.05880496 182.17916606 290.81005859 184.41699219 C289.20344319 186.02304358 287.5972678 187.62953524 285.99150085 189.23643494 C281.62639144 193.60211923 277.25513379 197.96160057 272.88277006 202.32001781 C268.3161182 206.87418494 263.75511244 211.43399936 259.19351196 215.9932251 C251.53489114 223.6463318 243.87278827 231.29593396 236.20800781 238.94287109 C228.31341204 246.81910764 220.42092047 254.69744291 212.53125 262.57861328 C211.80171775 263.30735736 211.80171775 263.30735736 211.05744748 264.05082354 C208.61755074 266.48811019 206.17769532 268.9254382 203.73786044 271.36278677 C183.49830871 291.58160652 163.25144665 311.79309477 143 332 C140.19612942 330.72113231 138.14751465 329.39618952 135.97540283 327.21591187 C135.40615585 326.64941422 134.83690887 326.08291656 134.25041199 325.49925232 C133.63829361 324.87994339 133.02617523 324.26063446 132.39550781 323.62255859 C131.74143448 322.96877731 131.08736115 322.31499603 130.41346741 321.6414032 C128.25524486 319.48178862 126.10419064 317.3151788 123.953125 315.1484375 C122.45712191 313.64870384 120.96067631 312.14941147 119.46380615 310.65054321 C115.52699775 306.70610188 111.59623266 302.75569106 107.66668701 298.80401611 C103.65511502 294.77197847 99.63786906 290.74560286 95.62109375 286.71875 C87.74182555 278.81803787 79.86892875 270.9110091 72 263 C69.19612942 264.27886769 67.14751465 265.60381048 64.97540283 267.78408813 C64.40615585 268.35058578 63.83690887 268.91708344 63.25041199 269.50074768 C62.63829361 270.12005661 62.02617523 270.73936554 61.39550781 271.37744141 C60.74143448 272.03122269 60.08736115 272.68500397 59.41346741 273.3585968 C57.25524486 275.51821138 55.10419064 277.6848212 52.953125 279.8515625 C51.45712191 281.35129616 49.96067631 282.85058853 48.46380615 284.34945679 C44.52699775 288.29389812 40.59623266 292.24430894 36.66668701 296.19598389 C32.65511502 300.22802153 28.63786906 304.25439714 24.62109375 308.28125 C16.74182555 316.18196213 8.86892875 324.0889909 1 332 C-3.85268882 327.95464361 -8.42278439 323.71916172 -12.8780365 319.24221802 C-13.5333023 318.58780664 -14.1885681 317.93339527 -14.86369044 317.25915325 C-17.04163252 315.08284803 -19.21599963 312.90300702 -21.39038086 310.72314453 C-22.95768102 309.15556209 -24.52520183 307.58820023 -26.09292603 306.02104187 C-30.33635352 301.77790073 -34.57669539 297.53168816 -38.81648326 293.28491068 C-43.25229177 288.84284182 -47.69094107 284.4036134 -52.12928772 279.96408081 C-59.57453978 272.51607595 -67.01804506 265.06632868 -74.46020508 257.61523438 C-82.12309059 249.94315921 -89.78703361 242.27214297 -97.45239258 234.60253906 C-97.92548581 234.12918311 -98.39857904 233.65582715 -98.88600843 233.16812707 C-101.25956408 230.79326632 -103.63314044 228.41842627 -106.0067271 226.04359651 C-125.67431723 206.36555989 -145.33833564 186.68395733 -165 167 C-163.71924338 164.19164643 -162.38950602 162.14005977 -160.20827293 159.96217728 C-159.63649736 159.3864196 -159.06472178 158.81066193 -158.47561967 158.21745706 C-157.84722078 157.59488385 -157.2188219 156.97231064 -156.57138062 156.33087158 C-155.90405273 155.66183485 -155.23672485 154.99279811 -154.5491749 154.30348754 C-152.30753145 152.05854477 -150.05880496 149.82083394 -147.81005859 147.58300781 C-146.20344319 145.97695642 -144.5972678 144.37046476 -142.99150085 142.76356506 C-138.62639144 138.39788077 -134.25513379 134.03839943 -129.88277006 129.67998219 C-125.3161182 125.12581506 -120.75511244 120.56600064 -116.19351196 116.0067749 C-108.53489114 108.3536682 -100.87278827 100.70406604 -93.20800781 93.05712891 C-85.31341204 85.18089236 -77.42092047 77.30255709 -69.53125 69.42138672 C-69.04489517 68.93555733 -68.55854034 68.44972795 -68.05744748 67.94917646 C-65.61755074 65.51188981 -63.17769532 63.0745618 -60.73786044 60.63721323 C-40.49830871 40.41839348 -20.25144665 20.20690523 0 0 Z "
        fill="#22254C"
        transform="translate(229,134)"
      />
      <path
        d="M0 0 C2.5826626 1.22248487 4.22539459 2.90079296 6.23611641 4.92925644 C7.09670662 5.79007324 7.95729683 6.65089005 8.84396553 7.53779221 C9.7638929 8.47320343 10.68382027 9.40861465 11.63162422 10.37237167 C12.58932142 11.33566618 13.54768469 12.29829891 14.50668526 13.26029587 C17.02534153 15.79039025 19.53485761 18.32936471 22.04257393 20.87029648 C24.60455654 23.4630022 27.17508424 26.04720498 29.74490547 28.6321373 C34.78324763 33.70262532 39.81198256 38.78254423 44.83474922 43.86846542 C43.55588153 46.672336 42.23093874 48.72095077 40.05066109 50.89306259 C39.20091461 51.74693306 39.20091461 51.74693306 38.33400154 52.61805344 C37.71469261 53.23017181 37.09538368 53.84229019 36.45730782 54.47295761 C35.80352654 55.12703094 35.14974525 55.78110428 34.47615242 56.45499802 C32.31653784 58.61322057 30.14992803 60.76427478 27.98318672 62.91534042 C26.48345306 64.41134351 24.98416069 65.90778912 23.48529243 67.40465927 C19.5408511 71.34146767 15.59044028 75.27223277 11.63876534 79.20177841 C7.60672769 83.2133504 3.58035208 87.23059636 -0.44650078 91.24737167 C-8.34721291 99.12663988 -16.25424168 106.99953667 -24.16525078 114.86846542 C-22.64717797 118.44325533 -20.54950367 120.72658266 -17.80734062 123.45342636 C-16.90655785 124.35405807 -16.00577507 125.25468979 -15.07769585 126.18261337 C-14.0939667 127.15613023 -13.11012828 128.12953668 -12.12618828 129.10284042 C-11.1196995 130.10559704 -10.11365288 131.10879764 -9.10803032 132.11242294 C-6.4656293 134.74720356 -3.81727649 137.37592153 -1.16763115 140.00341415 C1.53730975 142.6878623 4.23656743 145.37801165 6.93631172 148.06768417 C12.23025096 153.34020161 17.53049205 158.606326 22.83474922 163.86846542 C26.45267693 162.17309824 28.7320021 160.17694198 31.53006172 157.29815292 C32.85070625 155.95430527 32.85070625 155.95430527 34.19803047 154.58330917 C35.10939766 153.64616074 36.02076485 152.7090123 36.95974922 151.74346542 C38.77023679 149.88219279 40.58511085 148.02517341 42.40506172 146.17315292 C43.20701973 145.34799179 44.00897774 144.52283066 44.8352375 143.67266464 C46.83474922 141.86846542 46.83474922 141.86846542 48.83474922 141.86846542 C43.78576955 135.9211016 38.44294752 130.35238645 32.89724922 124.86846542 C32.11801094 124.09373886 31.33877266 123.3190123 30.5359211 122.52080917 C28.63782502 120.63435786 26.73741774 118.75030297 24.83474922 116.86846542 C26.37451582 113.21301974 28.57069686 110.88581256 31.36517525 108.09753036 C31.82832551 107.63267125 32.29147578 107.16781213 32.7686609 106.68886638 C34.31934456 105.13489263 35.87706035 103.5881679 37.43484688 102.04131699 C38.5488578 100.92787028 39.66242837 99.81398284 40.7755909 98.69968796 C43.79777336 95.67693139 46.82608508 92.66038337 49.85552454 89.64490223 C53.02082143 86.49210307 56.18046004 83.33364383 59.34070015 80.17577744 C65.32547468 74.19722048 71.31532945 68.22378032 77.30702055 62.25215602 C84.12829036 55.45323653 90.94388585 48.64864097 97.75900769 41.84355974 C111.77794468 27.84553105 125.80400177 13.85465536 139.83474922 -0.13153458 C143.49019491 1.40823202 145.81740208 3.60441307 148.60568428 6.39889145 C149.0705434 6.86204172 149.53540251 7.32519198 150.01434827 7.8023771 C151.56832201 9.35306076 153.11504674 10.91077655 154.66189766 12.46856308 C155.77534437 13.582574 156.8892318 14.69614457 158.00352669 15.8093071 C161.02628325 18.83148956 164.04283128 21.85980128 167.05831242 24.88924074 C170.21111158 28.05453763 173.36957081 31.21417624 176.52743721 34.37441635 C182.50599416 40.35919088 188.47943433 46.34904566 194.45105863 52.34073675 C201.24997811 59.16200657 208.05457367 65.97760205 214.8596549 72.79272389 C228.85768359 86.81166088 242.84855928 100.83771798 256.83474922 114.86846542 C255.29498262 118.52391111 253.09880158 120.85111828 250.3043232 123.63940048 C249.84117293 124.1042596 249.37802266 124.56911871 248.90083754 125.04806447 C247.35015388 126.60203821 245.79243809 128.14876295 244.23465157 129.69561386 C243.12064064 130.80906057 242.00707007 131.922948 240.89390755 133.03724289 C237.87172508 136.05999945 234.84341336 139.07654748 231.8139739 142.09202862 C228.64867701 145.24482778 225.4890384 148.40328701 222.32879829 151.56115341 C216.34402377 157.53971036 210.35416899 163.51315053 204.3624779 169.48477483 C197.54120808 176.28369431 190.7256126 183.08828987 183.91049075 189.89337111 C169.89155377 203.8913998 155.86549667 217.88227548 141.83474922 231.86846542 C138.38695089 230.23872815 136.13473512 228.41139242 133.43338203 225.69414902 C132.57279182 224.83340775 131.71220161 223.97266647 130.82553291 223.08584213 C129.90560555 222.15559219 128.98567818 221.22534225 128.03787422 220.26690292 C127.07995825 219.30525456 126.12159808 218.34404848 125.16281319 217.38326645 C122.64639797 214.85923261 120.13604815 212.32924951 117.62692451 209.79796982 C115.06312481 207.21367352 112.49362004 204.63506344 109.92459297 202.05596542 C104.88905465 196.99900845 99.85990362 191.93574286 94.83474922 186.86846542 C98.7932954 182.12655808 102.91844062 177.64349708 107.29910469 173.29058456 C107.9144558 172.67508743 108.5298069 172.0595903 109.16380501 171.42544174 C111.17415132 169.41578544 113.18800333 167.40968268 115.20193672 165.40362167 C116.60605583 164.00136999 118.00995258 162.59889561 119.41363716 161.19620895 C123.09059301 157.52305275 126.77054313 153.85291088 130.45114326 150.18340683 C134.21365159 146.43116775 137.97329501 142.6760605 141.73318672 138.9211998 C149.09758672 131.56749206 156.46515589 124.21696834 163.83474922 116.86846542 C162.31667642 113.29367552 160.21900211 111.01034819 157.47683907 108.28350449 C156.1256649 106.93255692 156.1256649 106.93255692 154.74719429 105.55431747 C153.76346514 104.58080062 152.77962672 103.60739417 151.79568672 102.63409042 C150.78919794 101.63133381 149.78315133 100.62813321 148.77752876 99.6245079 C146.13512775 96.98972729 143.48677494 94.36100931 140.83712959 91.73351669 C138.1321887 89.04906854 135.43293101 86.3589192 132.73318672 83.66924667 C127.43924749 78.39672924 122.13900639 73.13060485 116.83474922 67.86846542 C113.21391795 69.56700579 110.89219568 71.57951324 108.06912422 74.43877792 C107.1796711 75.33467636 106.29021797 76.2305748 105.37381172 77.15362167 C104.4534211 78.09077011 103.53303047 79.02791855 102.58474922 79.99346542 C101.63990066 80.94835179 100.69459289 81.90278401 99.74881172 82.85674667 C97.43956584 85.18955629 95.1351172 87.52690629 92.83474922 89.86846542 C94.39757904 93.63450412 96.74109673 96.00485693 99.62381172 98.85284042 C100.08709877 99.31329758 100.55038582 99.77375473 101.02771187 100.24816513 C102.50040821 101.7097162 103.97992325 103.1641371 105.45974922 104.61846542 C106.46281244 105.61149153 107.46542179 106.60497631 108.46756172 107.59893417 C110.91805757 110.02744483 113.37471592 112.44961218 115.83474922 114.86846542 C114.2906749 118.54118348 112.07281424 120.87707748 109.26635933 123.67736435 C108.79912551 124.14630702 108.33189169 124.61524969 107.85049927 125.09840274 C106.28599657 126.66619579 104.71446026 128.22674033 103.14285469 129.78741074 C102.01899168 130.91070954 100.89556901 132.03444905 99.7725544 133.15859604 C96.72351344 136.20821112 93.66834269 139.25161782 90.61204481 142.29395771 C87.41872087 145.47478429 84.23105486 148.66127058 81.04278755 151.84716415 C75.0048891 157.87884492 68.96191021 163.90540905 62.9170953 169.93015742 C56.03536729 176.78953544 49.15931332 183.65458923 42.28373313 190.52012873 C28.14038199 204.64257133 13.9899106 218.75786109 -0.16525078 232.86846542 C-6.49906338 227.64203559 -12.26787926 221.90062575 -18.05758476 216.08965683 C-19.14213232 215.00482676 -20.226901 213.9202177 -21.31187248 212.83581161 C-24.23922715 209.90874244 -27.1635005 206.97861267 -30.08720851 204.04790163 C-33.14967588 200.97915921 -36.21499827 197.91327126 -39.28001213 194.8470726 C-45.07584123 189.04814239 -50.8691177 183.24666904 -56.66146952 177.44426572 C-63.25928016 170.83525597 -69.85994958 164.22910452 -76.46085441 157.6231854 C-90.03215811 144.04144495 -103.59988792 130.45613942 -117.16525078 116.86846542 C-115.62604984 113.22381884 -113.43861315 110.88330239 -110.66174126 108.09080124 C-110.20141325 107.62523656 -109.74108525 107.15967188 -109.26680791 106.67999917 C-107.72548935 105.12369732 -106.1771226 103.57460908 -104.62862968 102.02544785 C-103.52114433 100.91034024 -102.41406297 99.79483127 -101.30735588 98.67895126 C-98.301966 95.65162446 -95.29003557 92.63088888 -92.27620173 89.61197066 C-90.3946803 87.72680675 -88.51446394 85.84035109 -86.63468361 83.95345116 C-80.08027699 77.37455931 -73.52017779 70.80139955 -66.95528984 64.23296738 C-60.82903783 58.10307396 -54.71606045 51.96015539 -48.60893691 45.81120986 C-43.36845743 40.53610081 -38.11846116 35.27059158 -32.86098802 30.01241952 C-29.71939756 26.87003417 -26.58195531 23.72375511 -23.45417976 20.5676136 C-20.5151708 17.60254753 -17.56456624 14.64954493 -14.60445786 11.70554733 C-13.51811088 10.62102433 -12.43605526 9.53218379 -11.35857773 8.4388485 C-9.89118684 6.95118029 -8.40936035 5.4796136 -6.92272758 4.0112114 C-6.09571154 3.18218402 -5.26869549 2.35315664 -4.41661835 1.49900723 C-2.16525078 -0.13153458 -2.16525078 -0.13153458 0 0 Z "
        fill="#FEFEFE"
        transform="translate(230.16525077819824,184.13153457641602)"
      />
    </svg>
  );
};

interface Props {
  size?: string;
}

export default Logo;