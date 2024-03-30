import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Rating = ({rating, maxRating}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {Array(rating)
        .fill(1)
        .map(el => (
          <FontAwesome5 name="heart" size={20} color="#2e2e2e" />
        ))}
      {Array(maxRating - rating)
        .fill(1)
        .map(el => (
          <FontAwesome5 name="star-o" size={20} color="#2e2e2e" />
        ))}
    </View>
  );
};

export default function Test() {
  const [isFavourite, setFavourite] = useState(false);
  const [size] = useState([
    {id: 1, label: 'S'},
    {id: 1, label: 'M'},
    {id: 1, label: 'L'},
    {id: 1, label: 'XL'},
  ]);

  const [selectedSize, setSelectedSize] = useState('M');

  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`,
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      productName: 'Black Printed Tshirt',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Printed Top (Women)',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90',
    },
    {
      productName: 'White Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Red Top (Women)',
      productPrice: 44.85,
      productImage:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
  ]);

  return (
    <SafeAreaView style={{backgroundColor: '#55F'}}>
      <View style={{backgroundColor: '#55F'}}>
        <View style={styles.header}>
          <FontAwesome5 name="bars" size={30} color="#fff" />
          <Text style={styles.headerTitle}>Shop</Text>
          <FontAwesome5 name="shopping-bag" size={26} color="#fff" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginVert: 10,
          }}>
          <Image
            style={{height: 200, resizeMode: 'cover', width: 200}}
            source={{
              uri: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>Men's OutCast T-Shirt</Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FontAwesome5
                name={isFavourite ? 'thumbs-up' : 'thumbs-down'}
                size={22}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.productPriceView}>
            <Text style={styles.discountedPriceText}>$29.99</Text>
            <Text style={styles.actualPriceText}>$40.00</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Rating rating={4} maxRating={5} />
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                color: '#000',
              }}>
              Size:
            </Text>
            <View style={{flexDirection: 'row'}}>
              {size.map(s => (
                <TouchableOpacity
                  key={s.id}
                  style={
                    selectedSize === s.label ? styles.tagSelected : styles.tag
                  }
                  onPress={() => setSelectedSize(s.label)}>
                  <Text
                    style={
                      selectedSize === s.label
                      ? styles.tagLabelSelected
                      : styles.tagLabel
                    }>
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
              </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={[styles.buttonText, {color: '#111'}]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10, backgroundColor: '#fff'}}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription(prev => !prev)}>
            <Text
              style={{
                fontFamily: 'MontserratBold',
                fontSize: 18,
                color: '#000',
              }}>
              Product Description
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription(prev => !prev)}>
              {seeFullDescription ? (
                <FontAwesome5 name="angle-up" size={26} color="#000" />
              ) : (
                <FontAwesome5 name="angle-down" size={26} color="#000" />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{padding: 10}}>
            <Text style={{fontFamily: 'MontserratRegular', color: '#000'}}>
              {seeFullDescription
                ? `${productDescription}`
                : `${productDescription.split('\n')[0]}`}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 20,
              marginHorizontal: 10,
              color: '#000',
              flex: 1,
            }}>
            More Products
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingTop: 10,
                marginBottom: 20,
              }}>
              {moreProducts.map(item => (
                <View style={{width: 180, marginHorizontal: 10}}>
                  <View style={styles.moreProductImageView}>
                    <Image
                      style={{flex: 1}}
                      source={{
                        uri: item.productImage,
                      }}
                    />
                  </View>
                  <View style={{marginTop: 8}}>
                    <Text style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                      <Text style={styles.moreProductPrice}>
                        ${item.productPrice}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesome5
                          style={styles.moreProductIcon}
                          name="heart"
                          size={18}
                        />
                        <FontAwesome5
                          style={styles.moreProductIcon}
                          name="shopping-bag"
                          size={18}
                        />
                        <FontAwesome5
                          style={styles.moreProductIcon}
                          name="share"
                          size={18}
                        />
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#000',

    borderBottomColor: '#dfe4fe',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 24,

    color: '#000',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: {
    fontSize: 20,
    color: '#000',
  },
  actualPriceText: {
    color: '#000',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 18,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'MontserratBold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: 'MontserratBold',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#000',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: 'MontserratBold',
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  moreProductName: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#000',
  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: '#fff',
  },
  moreProductPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
    color: '#fff',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    // backgroundColor: '#000',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  moreProductBuyButtonText: {
    color: '#000',
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});
