import React, { useEffect, useState } from 'react'
import { Button, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { TextInput } from 'react-native-paper';
import MyTextInput from '../components/MyTextInput';
// import { TextInput } from 'react-native';
import { Input } from '@rneui/base';
import MyRNETextInput from '../components/MyRNETextInput';
import { ScrollView } from 'react-native-gesture-handler';
import SubmitButton from '../components/SubmitButton';
import DatePickerInput from '../components/DateTimePickerInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerInput from '../components/DateTimePickerInput';
import { formatDate } from '../common/Utils';
import TextInputWithIcon from '../components/TextInputWithIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



// import MyRNETextInput from '../components/MyRNETextInput';

export default function KhataBookScreen() {

  const [nam, setNam] = useState('');
  const [gam, setGam] = useState('');
  const [banaPete, setBanaPete] = useState('');
  const [blockNang, setBlockNang] = useState('');
  const [bhav, setBhav] = useState('');
  const [bakiRakam, setbakiRakam] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [date, setDate] = useState(new Date());
  // const [date, setDate] = useState(null);
  const [dob, setDob] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);


  const [deliveryDate, setDeliveryDate] = useState('');
  const [utarelBlock, setUtarelBlock] = useState('');
  const [gadiNumber, setGadiNumber] = useState('');

  const handleBanaPeteChange = (banaPete) => {
    setBanaPete(banaPete);
    calculateBakiRakam();
  };

  const handleBlockNangChange = (blockNang) => {
    setBlockNang(blockNang);
    calculateBakiRakam();
  };

  const handleBhavChange = (bhav) => {
    setBhav(bhav);
    calculateBakiRakam();
  };

  const calculateBakiRakam = () => {
    let bakiRakam = 0;
    console.log('calculateBakiRakam bakiRakam', bakiRakam)
    console.log('calculateBakiRakam bhav', bhav)
    // if (banaPete & blockNang & bhav) {
    //   bakiRakam = banaPete - (blockNang * bhav);
    //   setbakiRakam(bakiRakam.toString())
    // } else {
    //   setbakiRakam('0')
    // }
    if (banaPete & blockNang & bhav) {
      bakiRakam = banaPete - (blockNang * bhav);

    }
    setbakiRakam(bakiRakam.toString())
  }

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submit button pressed');
    if (banaPete & blockNang & bhav)
      alert('તમારો ઓર્ડર સફળતાપૂર્વક નોંધવામાં આવ્યો છે');
    else
      alert('ઓર્ડર નોધવા માતે બધા જ માહિતી નાખો.');
  };

  // useEffect(() => {
  //   // This will be called whenever 'text' changes
  //   console.log('Text changed:', gam);
  // }, [gam]);

  // const handleDateChange = (selectedDate) => {
  //   setDate(selectedDate);
  // };

  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
  };

  /**
   * Tejas Patel - Dev
   * @param {*} event 
   * @param {*} selectedDate 
   */
  const handleDateChange = (event, selectedDate) => {
    // alert(selectedDate)
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
    // setDate(selectedDate.toString());
    // alert(date)
  };

  /**
   * ChatpGpt - Dev
   * @param {*} event 
   * @param {*} selectedDate 
   */
  const formatDateHere = (date) => {
    // if (date) {
    //   const day = date.getDate();
    //   const month = date.getMonth() + 1;
    //   const year = date.getFullYear();
    //   return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    // }
    if (date) {
      return date ? date.toLocaleDateString('en-GB') : '';
    }
    if (date) {
      const options = { day: '3-digit', month: '2-digit', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    }
    return '';
  };

  const handleDobChange = (selectedDate) => {
    setDob(selectedDate);
    setShowDatePicker(false);

    // alert(selectedDate)
  };

  // Format date as "DD-MM-YYYY"
  // const formattedDate = dob ? dob.toLocaleDateString('en-GB') : '';


  return (
    <ScrollView style={{ flex: 1, margin: 20, backgroundColor: 'transparent' }}>

      <MyTextInput
        // label="Nam"
        label="નામ"
        value={nam}
        // placeholder="Enter Nam"
        placeholder="નામ દાખલ કરો"
        onChangeText={(val => setNam(val))}
      />

      <MyTextInput
        // label="Gam"
        label="ગામ"
        value={gam}
        placeholder="ગામનું નામ દાખલ કરો"
        onChangeText={(val => setGam(val))}
      />

      <MyTextInput
        // label="Bana Pete"
        label="બાના પેટે"
        value={banaPete}
        placeholder="બાના પેટે દાખલ કરો"
        // onChangeText={(val => setBanaPete(val))}
        onChangeText={handleBanaPeteChange}
        keyboardType="numeric"
      />

      <MyTextInput
        // label="Block Nang"
        label="બ્લોક નંગ"
        value={blockNang}
        placeholder="બ્લોક નંગ દાખલ કરો"
        // onChangeText={(val => setBlockNang(val))}
        onChangeText={handleBlockNangChange}
        keyboardType="numeric"
      />

      <MyTextInput
        // label="Bhav"
        label="ભાવ"
        value={bhav}
        placeholder="ભાવ દાખલ કરો"
        // onChangeText={(val => setBhav(val))}
        onChangeText={handleBhavChange}
        // onChangeText={calculateBakiRakam}
        keyboardType="numeric"
      />

      <MyTextInput
        // label="Baki Rakam"
        label="બાકી રકમ"
        value={bakiRakam}
        placeholder="બાકી રકમ નાખો"
        editable={false}
        // onChangeText={(val => setbakiRakam(val))}
        // onChangeText={calculateBakiRakam}
        keyboardType="numeric"
      />

      <MyTextInput
        // label="Mobile Number (1)"
        label="મોબાઈલ નંબર (1)"
        value={mobile1}
        placeholder="મોબાઈલ નંબર (1) નાખો"
        onChangeText={(val => setMobile1(val))}
        keyboardType="number-pad"

      />
      <MyTextInput
        // label="Mobile Number (2)"
        label="મોબાઈલ નંબર (2)"
        value={mobile2}
        placeholder="મોબાઈલ નંબર (2) નાખો"
        onChangeText={(val => setMobile2(val))}
        keyboardType="number-pad"
      />

      <TouchableWithoutFeedback style={{ backgroundColor: 'red' }} onPress={handleOpenDatePicker}>
        <View style={styles.container}>
          <MyTextInput
            label="Direct DatePicker w/o Icon"
            // value={value ? value.toLocaleDateString() : ''}
            // value={date}
            // value={formattedDate}
            // value={formatDate(date)}
            value={formatDateHere(date)}
            // value={date.toString()}
            // value='23-05-2023'
            placeholder="Direct DatePicker w/o Icon"
            editable={false}
          />
          {showDatePicker && (
            <DateTimePicker
              style={{ borderRadius: 5 }}
              // value={value || new Date()}
              value={date}
              // value={dob}
              // dateFormat='DD/MM/YYYY'
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      <View style={{ backgroundColor: 'transparent' }}>
        {/* <Button title="Submit" onPress={() => console.log(date)} /> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <TextInput
            style={{ flex: 1, marginRight: 10 }}
            // value={dob}
            value={formatDateHere(date)}
            placeholder="Date of Birth"
            onChangeText={setDob}
            editable={false}
          /> */}
          <MyTextInput
            label="Direct_DatePicker + ICON"
            // value={value ? value.toLocaleDateString() : ''}
            // value={date}
            style={{ flex: 1 }}
            // value={formattedDate}
            // value={formatDate(date)}
            value={formatDateHere(date)}
            // value={date.toString()}
            // value='23-05-2023'
            placeholder="Direct_DatePicker + ICON"
            editable={false}
          />
          <Icon
            name="calendar"
            size={50}
            color="gray"
            onPress={handleDateChange}
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

      </View>



      <TextInputWithIcon
        label="RN Paper Textinput with icon"
        placeholder="RN Paper Textinput with icon"
        // value={date}
        value={formatDateHere(date)}
        onChangeText={handleDateChange}
        iconName="lock"
        onIconPress={handleOpenDatePicker}
      />



      {/* <MyTextInput
        label="TRY Date of Birth"
        value={dob ? dob.toLocaleDateString() : ''}
        onFocus={handleOpenDatePicker}
      />
      {showDatePicker && (
        <DateTimePicker
          value={dob || new Date()}
          mode="date"
          display="default"
          onChange={handleDobChange}
        />
      )} */}


      {/* <DateTimePickerInput
        label="Date of Birth"
        value={date}
        onChange={handleDobChange}
      showDatePicker={showDatePicker}
      /> */}

      {/* <Button title='Select Date' onPress={handleOpenDatePicker}>Select Date</Button>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )} */}

      {/* <DatePickerInput
        label="Date of Birth"
        value={date}
      // onChange={setDate}
      // onChange={handleDateChange}
      /> */}

      <MyTextInput
        // label="Delivery date"
        label="ડિલિવરી તારીખ"
        value={deliveryDate}
        placeholder="ડિલિવરી તારીખ નાખો"
        onChangeText={(val => setDeliveryDate(val))}
      />

      <MyTextInput
        // label="Unloaded block"
        label="ઉતારેલ બ્લોક"
        value={utarelBlock}
        placeholder="ઉતારેલ બ્લોક નાખો"
        onChangeText={(val => setUtarelBlock(val))}
      />

      <MyTextInput
        // label="Vehicle No"
        label="ગાડી નંબર"
        value={gadiNumber}
        placeholder="ગાડી નંબર નાખો"
        onChangeText={(val => setGadiNumber(val))}
      />

      <SubmitButton onPress={handleSubmit} />


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});
