import React, {useState} from 'react';
import '../styles/PeriodicTable.css';

interface PeriodicTableProps {
    onElementSelected: any
}

const PeriodicTable: React.FC<PeriodicTableProps> = (props) => {

    let {onElementSelected} = props

    return (
        <div id="app">
            <div className="row">
                <div className="element row-number">1</div>
                <div className="element special-element" data-element="1"><span className="atomic-number">1</span></div>
                <div className="element" data-element="2"><span className="atomic-number">2</span></div>
            </div>
            <div className="row">
                <div className="element row-number">2</div>
                <div className="element" data-element="3"><span className="atomic-number">3</span></div>
                <div className="element special-element" data-element="4"><span className="atomic-number">4</span></div>
                <div className="element" data-element="5"><span className="atomic-number">5</span></div>
                <div className="element" data-element="6"><span className="atomic-number">6</span></div>
                <div className="element" data-element="7"><span className="atomic-number">7</span></div>
                <div className="element" data-element="8"><span className="atomic-number">8</span></div>
                <div className="element" data-element="9"><span className="atomic-number">9</span></div>
                <div className="element" data-element="10"><span className="atomic-number">10</span></div>
            </div>
            <div className="row">
                <div className="element row-number">3</div>
                <div className="element" data-element="11"><span className="atomic-number">11</span></div>
                <div className="element special-element" data-element="12"><span className="atomic-number">12</span>
                </div>
                <div className="element" data-element="13"><span className="atomic-number">13</span></div>
                <div className="element" data-element="14"><span className="atomic-number">14</span></div>
                <div className="element" data-element="15"><span className="atomic-number">15</span></div>
                <div className="element" data-element="16"><span className="atomic-number">16</span></div>
                <div className="element" data-element="17"><span className="atomic-number">17</span></div>
                <div className="element" data-element="18"><span className="atomic-number">18</span></div>
            </div>
            <div className="row">
                <div className="element row-number">4</div>
                <div className="element" data-element="19"><span className="atomic-number">19</span></div>
                <div className="element" data-element="20"><span className="atomic-number">20</span></div>
                <div className="element" data-element="21"><span className="atomic-number">21</span></div>
                <div className="element" data-element="22"><span className="atomic-number">22</span></div>
                <div className="element" data-element="23"><span className="atomic-number">23</span></div>
                <div className="element" data-element="24"><span className="atomic-number">24</span></div>
                <div className="element" data-element="25"><span className="atomic-number">25</span></div>
                <div className="element" data-element="26"><span className="atomic-number">26</span></div>
                <div className="element" data-element="27" onClick={() => {
                    onElementSelected(27)
                }}><span className="atomic-number">27</span>Co
                </div>
                <div className="element" data-element="28"><span className="atomic-number">28</span></div>
                <div className="element" data-element="29" onClick={() => {
                    onElementSelected(29)
                }}><span className="atomic-number">29</span>Cu
                </div>
                <div className="element" data-element="30"><span className="atomic-number">30</span></div>
                <div className="element" data-element="31"><span className="atomic-number">31</span></div>
                <div className="element" data-element="32"><span className="atomic-number">32</span></div>
                <div className="element" data-element="33"><span className="atomic-number">33</span></div>
                <div className="element" data-element="34"><span className="atomic-number">34</span></div>
                <div className="element" data-element="35"><span className="atomic-number">35</span></div>
                <div className="element" data-element="36"><span className="atomic-number">36</span></div>
            </div>
            <div className="row">
                <div className="element row-number">5</div>
                <div className="element" data-element="37"><span className="atomic-number">37</span></div>
                <div className="element" data-element="38"><span className="atomic-number">38</span></div>
                <div className="element" data-element="39"><span className="atomic-number">39</span></div>
                <div className="element" data-element="40"><span className="atomic-number">40</span></div>
                <div className="element" data-element="41"><span className="atomic-number">41</span></div>
                <div className="element" data-element="42"><span className="atomic-number">42</span></div>
                <div className="element" data-element="43"><span className="atomic-number">43</span></div>
                <div className="element" data-element="44"><span className="atomic-number">44</span></div>
                <div className="element" data-element="45"><span className="atomic-number">45</span></div>
                <div className="element" data-element="46"><span className="atomic-number">46</span></div>
                <div className="element" data-element="47"><span className="atomic-number">47</span></div>
                <div className="element" data-element="48"><span className="atomic-number">48</span></div>
                <div className="element" data-element="49"><span className="atomic-number">49</span></div>
                <div className="element" data-element="50"><span className="atomic-number">50</span></div>
                <div className="element" data-element="51"><span className="atomic-number">51</span></div>
                <div className="element" data-element="52"><span className="atomic-number">52</span></div>
                <div className="element" data-element="53"><span className="atomic-number">53</span></div>
                <div className="element" data-element="54"><span className="atomic-number">54</span></div>
            </div>
            <div className="row">
                <div className="element row-number">6</div>
                <div className="element" data-element="55"><span className="atomic-number">55</span></div>
                <div className="element" data-element="56"><span className="atomic-number">56</span></div>
                <div className="element special-cell">57/71</div>
                <div className="element" data-element="72"><span className="atomic-number">72</span></div>
                <div className="element" data-element="73"><span className="atomic-number">73</span></div>
                <div className="element" data-element="74"><span className="atomic-number">74</span></div>
                <div className="element" data-element="75"><span className="atomic-number">75</span></div>
                <div className="element" data-element="76"><span className="atomic-number">76</span></div>
                <div className="element" data-element="77"><span className="atomic-number">77</span></div>
                <div className="element" data-element="78"><span className="atomic-number">78</span></div>
                <div className="element" data-element="79"><span className="atomic-number">79</span></div>
                <div className="element" data-element="80"><span className="atomic-number">80</span></div>
                <div className="element" data-element="81"><span className="atomic-number">81</span></div>
                <div className="element" data-element="82"><span className="atomic-number">82</span></div>
                <div className="element" data-element="83"><span className="atomic-number">83</span></div>
                <div className="element" data-element="84"><span className="atomic-number">84</span></div>
                <div className="element" data-element="85"><span className="atomic-number">85</span></div>
                <div className="element" data-element="86"><span className="atomic-number">86</span></div>
            </div>
            <div className="row">
                <div className="element row-number">7</div>
                <div className="element" data-element="87"><span className="atomic-number">87</span></div>
                <div className="element" data-element="88"><span className="atomic-number">88</span></div>
                <div className="element special-cell">89/103</div>
                <div className="element" data-element="104"><span className="atomic-number">104</span></div>
                <div className="element" data-element="105"><span className="atomic-number">105</span></div>
                <div className="element" data-element="106"><span className="atomic-number">106</span></div>
                <div className="element" data-element="107"><span className="atomic-number">107</span></div>
                <div className="element" data-element="108"><span className="atomic-number">108</span></div>
                <div className="element" data-element="109"><span className="atomic-number">109</span></div>
                <div className="element" data-element="110"><span className="atomic-number">110</span></div>
                <div className="element" data-element="111"><span className="atomic-number">111</span></div>
                <div className="element" data-element="112"><span className="atomic-number">112</span></div>
                <div className="element" data-element="113"><span className="atomic-number">113</span></div>
                <div className="element" data-element="114"><span className="atomic-number">114</span></div>
                <div className="element" data-element="115"><span className="atomic-number">115</span></div>
                <div className="element" data-element="116"><span className="atomic-number">116</span></div>
                <div className="element" data-element="117"><span className="atomic-number">117</span></div>
                <div className="element" data-element="118"><span className="atomic-number">118</span></div>
            </div>
            <div className="row special-row">
                <div className="element row-number">6</div>
                <div className="element" data-element="57"><span className="atomic-number">57</span></div>
                <div className="element" data-element="58"><span className="atomic-number">58</span></div>
                <div className="element" data-element="59"><span className="atomic-number">59</span></div>
                <div className="element" data-element="60"><span className="atomic-number">60</span></div>
                <div className="element" data-element="61"><span className="atomic-number">61</span></div>
                <div className="element" data-element="62"><span className="atomic-number">62</span></div>
                <div className="element" data-element="63"><span className="atomic-number">63</span></div>
                <div className="element" data-element="64"><span className="atomic-number">64</span></div>
                <div className="element" data-element="65"><span className="atomic-number">65</span></div>
                <div className="element" data-element="66"><span className="atomic-number">66</span></div>
                <div className="element" data-element="67" onClick={() => {
                    onElementSelected(67)
                }}><span className="atomic-number">67</span>Ho
                </div>
                <div className="element" data-element="68"><span className="atomic-number">68</span></div>
                <div className="element" data-element="69"><span className="atomic-number">69</span></div>
                <div className="element" data-element="70"><span className="atomic-number">70</span></div>
                <div className="element" data-element="71"><span className="atomic-number">71</span></div>
            </div>
            <div className="row special-row">
                <div className="element row-number">7</div>
                <div className="element" data-element="89"><span className="atomic-number">89</span></div>
                <div className="element" data-element="90"><span className="atomic-number">90</span></div>
                <div className="element" data-element="91"><span className="atomic-number">91</span></div>
                <div className="element" data-element="92"><span className="atomic-number">92</span></div>
                <div className="element" data-element="93"><span className="atomic-number">93</span></div>
                <div className="element" data-element="94"><span className="atomic-number">94</span></div>
                <div className="element" data-element="95"><span className="atomic-number">95</span></div>
                <div className="element" data-element="96"><span className="atomic-number">96</span></div>
                <div className="element" data-element="97"><span className="atomic-number">97</span></div>
                <div className="element" data-element="98"><span className="atomic-number">98</span></div>
                <div className="element" data-element="99"><span className="atomic-number">99</span></div>
                <div className="element" data-element="100"><span className="atomic-number">100</span></div>
                <div className="element" data-element="101"><span className="atomic-number">101</span></div>
                <div className="element" data-element="102"><span className="atomic-number">102</span></div>
                <div className="element" data-element="103"><span className="atomic-number">103</span></div>
            </div>
        </div>

    );
};

export default PeriodicTable;

