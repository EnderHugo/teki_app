import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import 'swiper/css';
import "swiper/css/navigation";
import '../tabPages.css';


const Terms: React.FC = () => {
  return (
    <IonPage>
       
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
            <IonBackButton color={'light'}/>
            <IonTitle>Termos de Serviços</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div id='background'>
          <div className='ion-text-wrap'>

            <IonHeader>
              <IonTitle>Relacionamento Contratual</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Estes termos de uso (“Termos”) regem seu acesso e uso, como pessoa física, dentro do Brasil, de aplicativos, sites de Internet, conteúdos, bens e também serviços (os “Serviços”) disponibilizados pela Teki Tecnologia Ltda.</IonText>
            <br/> <br/>
            <IonText>Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que estabelecem o relacionamento contratual entre você, na qualidade de usuário(a), e a Teki. Se você não concorda com estes Termos, você não pode acessar nem usar os Serviços. Mediante referido acesso e uso, estes Termos imediatamente encerram, substituem e superam todos os acordos, Termos e acertos anteriores entre você e qualquer afiliada da Teki.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Serviços e Conteúdo de Terceiros(as)</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Os Serviços poderão ser disponibilizados e acessados em conexão com Serviços e conteúdo de terceiros(às) (inclusive publicidade) que a Teki não controlará. VOCÊ RECONHECE QUE TERMOS DE USO E POLÍTICAS DE PRIVACIDADE DIFERENTES PODERÃO SER APLICÁVEIS AO USO DESSES SERVIÇOS E CONTEÚDO DE TERCEIROS(AS). A TEKI NÃO ENDOSSA ESSES SERVIÇOS E CONTEÚDO DE TERCEIROS(AS) E A TEKI NÃO SERÁ, EM HIPÓTESE ALGUMA, RESPONSÁVEL POR NENHUM PRODUTO OU SERVIÇO DESSES(ÀS) TERCEIROS(AS) FORNECEDORES(AS)</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Contas de Usuários</IonTitle>
            </IonHeader>
            <br/>
            <IonText></IonText>
            <br/>Para utilizar grande parte dos Serviços, você deve registrar-se e manter uma conta pessoal de usuário de Serviços (“Conta”). Você deve ter pelo menos 18 anos para registrar uma Conta. Usuários com idade igual ou superior a 12 anos poderão registrar-se e manter uma Conta desde que tenham sido devidamente representados ou tenham obtido o consentimento de seu(s) responsável(is) legal(is), conforme o procedimento para registro aplicável em cada caso. O registro de Conta exige que a Teki colete determinados dados pessoais, que podem incluir seu nome, endereço, número de telefone celular e data de nascimento, assim como pelo menos um método de pagamento válido (cartão de crédito ou parceiro de pagamento aceito pela Teki). <br/>
            <br/>
            <IonText>Você concorda em manter informações corretas, completas e atualizadas em sua Conta. Se você não mantiver informações corretas, completas e atualizadas em sua Conta, inclusive se o método de pagamento informado for inválido ou expirado, você poderá ficar impossibilitado(a) de acessar e usar os Serviços ou a Teki poderá resolver estes Termos. Você é responsável por todas as atividades realizadas na sua Conta e concorda em manter sempre a segurança e confidencialidade do nome de usuário e senha da sua Conta. A menos que seja permitido pela Teki por escrito, você poderá manter apenas uma Conta.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Conduta e Obrigações do Usuário</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Você não poderá autorizar terceiros(as) a usar sua Conta ou receber serviços de transporte ou logística dos Parceiros Independentes, salvo se estiverem em sua companhia. Você não poderá ceder, nem de qualquer outro modo transferir, sua Conta a nenhuma outra pessoa ou entidade.</IonText>
            <br/> <br/>
            <IonText>Você não poderá, quando usar os Serviços, causar transtorno, aborrecimento, inconveniente ou qualquer outro terceiro. Em determinadas situações, você poderá ser solicitado(a) a fornecer comprovante de identidade para acessar ou usar os Serviços, e concorda que poderá ter seu acesso ou uso dos Serviços negado caso você se recuse a fornecer um comprovante de identidade.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Pagamento</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Você entende que os serviços ou bens que você receber de um Parceiro Independente, contratados por meio dos Serviços, poderão ser cobrados (“Preço”). Após você ter recebido serviços ou bens obtidos por meio do uso do Serviço, a Teki facilitará o seu pagamento do respectivo Preço ao Parceiro Independente, agindo na qualidade de agente limitado de cobrança do Parceiro Independente. O pagamento do Preço feito dessa maneira será considerado pagamento feito diretamente por você ao Parceiro Independente. O preço incluirá todos os tributos exigidos por lei.</IonText>
            <br/> <br/>
            <IonText>O preço pago por você é final e não reembolsável, a menos que seja determinado pela Teki. Você tem o direito de solicitar uma redução no Preço ao Parceiro Independente por serviços ou bens recebidos desse Parceiro Independente no momento em que receber esses serviços ou bens. A Teki responderá de acordo com qualquer solicitação de Parceiro Independente para modificar o preço de um serviço ou bem em particular.</IonText>
            <br/> <br/>
            <IonText>O preço total é devido e deve ser pago imediatamente após a prestação do serviço ou entrega do bem pelo Parceiro Independente e o pagamento será facilitado pela Teki mediante o método de pagamento indicado na sua Conta, após o que a Teki enviará um recibo por e-mail. Se for verificado que o método de pagamento indicado na Conta expirou, é inválido ou não pode ser cobrado, você concorda que a Teki poderá, na qualidade de agente limitado de cobrança do Parceiro Independente, usar um método secundário de cobrança na Conta, se houver.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Legislação Aplicável; Jurisdição</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Estes Termos serão regidos e interpretados exclusivamente de acordo com as leis do Brasil. Qualquer reclamação, conflito ou controvérsia que surgir deste contrato ou a ele relacionada, inclusive que diga respeito a sua validade, interpretação ou exequibilidade, será solucionada exclusivamente pelos tribunais do foro de seu domicílio.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Outras Disposições</IonTitle>
            </IonHeader>
            <br/>
            <IonText>Avisos.<br/>A Teki poderá enviar avisos por meio de notificações gerais nos Serviços, correio eletrônico para seu endereço de e-mail em sua Conta, ou por comunicação escrita enviada ao endereço indicado em sua Conta. Você poderá notificar a Teki por meio do Aplicativo.</IonText>
            <br/> <br/>
            <IonHeader>
              <IonTitle>Conteúdo Fornecido pelo(a) Usuário(a)</IonTitle>
            </IonHeader>
            <br/>
            <IonText>A Teki poderá, a seu exclusivo critério, permitir que você ou qualquer pessoa apresente, carregue, publique ou, de qualquer modo, disponibilize para a Teki por meio dos Serviços, conteúdo e informações de texto, áudio ou vídeo, inclusive comentários e feedbacks relacionados aos Serviços, iniciação de solicitação de suporte.</IonText>
            <br/> <br/>
            <IonText>Você concorda em não fornecer Conteúdo de Usuário(a) que seja difamatório, calunioso, injurioso, violento, obsceno, pornográfico, ilegal ou de qualquer modo ofensivo, conforme apuração da Teki a seu critério exclusivo, seja ou não esse material protegido por lei. A Teki poderá, mas não está obrigada a, analisar, monitorar ou remover Conteúdo de Usuário(a), a critério exclusivo da Teki, a qualquer momento e por qualquer motivo, sem nenhum aviso a você.</IonText>
            <br/> <br/>
            
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Terms;
