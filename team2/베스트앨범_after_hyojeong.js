/*
hyojeong
다른 방법으로 풀어보려고 했는데, 배열 메소드 체이닝이 아니라
함수 내부에서 다른 배열함수를 부르고 있어서 더 복잡해진 것 같기도 합니다
다른 방식으로 플면 이렇게도 가능하다~
이 정도로 생각해주시면 감사하겠습니다!
*/

function solution(genres, plays) {
  // 모든 데이터를 하나의 객체로 합치기
  const songData = plays.map((play, index) => {
    return { genre: genres[index], index: index, play: play };
  });

  // console.log(songData)

  // 장르 중복되지 않는 배열
  const uniqueGenres = Array.from(new Set(genres));

  // 장르 별로 묶어서 재생수 내림차순 정렬한 배열 생성
  const filterd = uniqueGenres.map((genre) =>
    songData
      .filter((song) => song.genre === genre)
      .sort((a, b) => b.play - a.play)
  );

  // 장르 별 총 재생 수 계산하여 정렬 ['장르이름', 총 재생 수]
  const reduced = filterd
    .map((item) => [
      item[0].genre,
      item.reduce((acc, current) => acc + current.play, 0),
    ])
    .sort((a, b) => b[1] - a[1]);

  // 정렬한 장르 이름만 남김
  const reference = reduced.map((item) => item[0]);

  // 장르 별 총 재생 수 계산 결괏값에 따라 전체 데이터 배열 정렬
  filterd.sort((a, b) => {
    const indexA = reference.indexOf(a[0].genre);
    const indexB = reference.indexOf(b[0].genre);

    return indexA - indexB;
  });

  // console.log(filterd)

  // 장르 별로 2곡씩만 남기고 배열 평탄화
  const result = filterd
    .map((songs) => songs.filter((_, idx) => idx < 2).map((song) => song.index))
    .flat();

  // console.log(reference)
  // console.log(result);

  return result;
}
